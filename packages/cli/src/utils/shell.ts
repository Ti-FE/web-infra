import path from 'path'
import fs from 'fs'
import fsp from 'fs/promises'

import shelljs from 'shelljs'
import semver from 'semver'
import detectIndent from 'detect-indent'

import { LogLevel } from './logger'
import { DEFAULT_INDENT } from './constants'
import { writeFilePreservingEol } from './fs'

shelljs.config.silent = true
shelljs.config.fatal = true

export const exec = (cmd: string) => shelljs.exec(cmd)

/**
 * Get the whole project root, equals git root
 */
export function getProjectRoot(): string {
  const { stdout: root } = exec(`git rev-parse --show-toplevel`)
  return root.trim()
}

interface PackageJSON {
  path: string
  json: any
  indent: string
}

function getPacakgeJson(dir: string): PackageJSON {
  try {
    const file = fs.readFileSync(path.resolve(dir, 'package.json'), 'utf8')
    const indent = detectIndent(file).indent || DEFAULT_INDENT
    return {
      path: `${dir}/package.json`,
      json: JSON.parse(file),
      indent,
    }
  } catch {
    throw new Error('Could not find package.json.')
  }
}

export function getCurrentDirectoryPackageJson() {
  return getPacakgeJson(process.cwd())
}

export function isNpmModuleInstalled(moduleName: string): boolean {
  try {
    const version = getInstalledModuleVersion(moduleName)
    return Boolean(version)
  } catch {
    return false
  }
}

export function isFileExist(fileName: string) {
  return fs.existsSync(fileName)
}

export function isInsideGitRepo() {
  try {
    const { stdout } = exec(`git rev-parse --is-inside-work-tree`)
    return stdout.trim() === 'true'
  } catch {
    return false
  }
}

export async function setNpmScript(name: string, script: string) {
  const { json, path, indent } = getCurrentDirectoryPackageJson()
  if (!json.scripts) {
    json.scripts = {}
  }

  if (!json.scripts[name]) {
    json.scripts[name] = script
  }

  await writeFilePreservingEol(path, JSON.stringify(json, null, indent))
}

type HookTypes =
  | 'pre-commit'
  | 'prepare-commit-msg'
  | 'commit-msg'
  | 'post-commit'

export async function addHuskyGitHook(name: HookTypes, script: string) {
  // npx husky add can't deal with script like `echo '$(pwd)' so we use our own implementation`
  const filename = `.husky/${name}`
  if (isFileExist(filename)) {
    await fsp.appendFile(filename, script + '\n')
  } else {
    await fsp.writeFile(
      filename,
      '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\n' + script + '\n'
    )
    await fsp.chmod(filename, '755')
  }
}

type ModuleInHooks = 'prettier' | 'eslint' | 'pretty-quick' | 'lint-staged'

export function hasHuskyGitHook(
  type: HookTypes,
  names: ModuleInHooks | ModuleInHooks[]
): boolean {
  try {
    const huskyPath = path.join(process.cwd(), '.husky', type)
    const { stdout } = exec(`cat ${huskyPath.trim()}`)
    const checkingModuleNames = Array.isArray(names) ? names : [names]
    return checkingModuleNames.some(name => stdout.includes(name))
  } catch {
    return false
  }
}

export function getInstalledModuleVersion(name: string): string | null {
  try {
    const { stdout } = exec(`npm list ${name} --depth 0 | grep ${name}`)
    const versions: [string, semver.SemVer][] = stdout
      .trim()
      .split('\n')
      .map(s => s.slice(s.indexOf(name)).split('@')) // [['module1', '1.0.0'], ['module1', '2.0.0']]
      .map(([k, v]) => [k, semver.coerce(v)!])

    if (versions.length > 1) {
      versions.sort((a, b) => b[1].compare(a[1])) // put newer version on top
    }

    return versions[0][1].format()
  } catch (e) {
    return null
  }
}

export let logLevel = 'info' as LogLevel

export const setLogLevel = (level: LogLevel = 'info') => {
  logLevel = level
}
