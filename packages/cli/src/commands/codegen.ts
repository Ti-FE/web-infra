import fs from 'fs'
import path from 'path'
import os from 'os'

import {
  generateEndpoints,
  ConfigFile,
  parseConfig,
} from '@rtk-query/codegen-openapi'
import * as ts from 'typescript'

export interface CodegenOptions {
  schema?: string
  group?: string
  output?: string
  hook?: boolean
}

export async function codegen(options: CodegenOptions) {
  if (!options.schema) {
    throw new Error('Schema file is required!')
  }

  const schemaAbsPath = path.resolve(process.cwd(), options.schema)
  const models = options.group
    ? options.group.split(',').map(i => i.toLowerCase())
    : []

  const config: any = {
    apiFile: './api.ts',
    schemaFile: schemaAbsPath,
    hooks: options.hook ?? true,
  }

  if (models.length > 0) {
    config.outputFiles = models.reduce((acc, name) => {
      const filePath = path.join(options.output ?? '.', `${name}.ts`)
      acc[filePath] = {
        filterEndpoints: [new RegExp(`${name}`, 'i')],
      }
      return acc
    }, {} as any)

    for (const c of parseConfig(config)) {
      const { outputFile, ...rest } = c
      await generateFile(rest as ConfigFile, outputFile, !options.hook)
    }
  } else {
    const outputFile = path.join(options.output ?? '.', 'index.ts')
    await generateFile(config as ConfigFile, outputFile, !options.hook)
  }

  const apiFileNodes = createRTKQApiInitializationDeclaration()
  print(path.join(options.output ?? '.', 'api.ts'), apiFileNodes)
}

async function generateFile(
  config: ConfigFile,
  outputFile: string,
  onlyTypeAlias: boolean
) {
  const code = (await generateEndpoints(config)) as string
  const nodes = traverse(code, outputFile, onlyTypeAlias)

  print(outputFile, nodes)
}

function traverse(
  code: string,
  outputFile: string,
  onlyTypeAlias: boolean
): ts.Node[] {
  const sourceFile = ts.createSourceFile(
    path.basename(outputFile),
    code,
    ts.ScriptTarget.ESNext
  )

  const result = [] as ts.Node[]

  function traverseNode(node: ts.Node) {
    if (onlyTypeAlias && ts.isTypeAliasDeclaration(node)) {
      result.push(node)
    } else {
      result.push(node)
    }
  }

  ts.forEachChild(sourceFile, traverseNode)
  return result
}

function print(outputFile: string, nodes: ts.Node[]) {
  const dir = path.dirname(outputFile)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  const stream = fs.createWriteStream(outputFile, {
    encoding: 'utf8',
  })

  const printer = ts.createPrinter({
    newLine:
      os.EOL === '\n'
        ? ts.NewLineKind.LineFeed
        : ts.NewLineKind.CarriageReturnLineFeed,
  })

  const resultFile = ts.createSourceFile(
    path.basename(outputFile),
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )

  nodes.forEach(n => {
    stream.write(printer.printNode(ts.EmitHint.Unspecified, n, resultFile))
    stream.write('\n\n')
  })
}

function createRTKQApiInitializationDeclaration(): ts.Node[] {
  const { factory } = ts
  return [
    factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([
          factory.createImportSpecifier(
            undefined,
            factory.createIdentifier('createApi')
          ),
          factory.createImportSpecifier(
            undefined,
            factory.createIdentifier('fetchBaseQuery')
          ),
        ])
      ),
      factory.createStringLiteral('@reduxjs/toolkit/query/react')
    ),

    factory.createVariableStatement(
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier('api'),
            undefined,
            undefined,
            factory.createCallExpression(
              factory.createIdentifier('createApi'),
              undefined,
              [
                factory.createObjectLiteralExpression(
                  [
                    factory.createPropertyAssignment(
                      factory.createIdentifier('baseQuery'),
                      factory.createCallExpression(
                        factory.createIdentifier('fetchBaseQuery'),
                        undefined,
                        [
                          factory.createObjectLiteralExpression(
                            [
                              factory.createPropertyAssignment(
                                factory.createIdentifier('baseUrl'),
                                factory.createStringLiteral('/')
                              ),
                            ],
                            false
                          ),
                        ]
                      )
                    ),
                    factory.createPropertyAssignment(
                      factory.createIdentifier('endpoints'),
                      factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        factory.createToken(
                          ts.SyntaxKind.EqualsGreaterThanToken
                        ),
                        factory.createParenthesizedExpression(
                          factory.createObjectLiteralExpression([], false)
                        )
                      )
                    ),
                  ],
                  true
                ),
              ]
            )
          ),
        ],
        ts.NodeFlags.Const
      )
    ),
  ]
}
