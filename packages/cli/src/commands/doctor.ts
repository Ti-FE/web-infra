import { DoctorResult, resultLevelToLogSymbol } from '../utils/common'
import { createLogger } from '../utils/logger'
import * as shell from '../utils/shell'
import { PrettierDoctor } from '../doctors/prettier'
import { GitDoctor } from '../doctors/git'
import { EslintDoctor } from '../doctors/eslint'

export async function doctor() {
  const prettierDoctor = new PrettierDoctor()
  const gitDoctor = new GitDoctor()
  const eslintDoctor = new EslintDoctor()
  const results = []

  const prettierStatus = await prettierDoctor.check()
  const gitStatus = await gitDoctor.check()
  const eslintStatus = await eslintDoctor.check()

  results.push(prettierDoctor.getDoctorResult(prettierStatus))
  results.push(gitDoctor.getDoctorResult(gitStatus))
  results.push(eslintDoctor.getDoctorResult(eslintStatus))

  printResult(results)
}

export function printResult(results: DoctorResult[]) {
  const logger = createLogger(shell.logLevel)

  results.forEach(r => {
    const level = r.type === 'success' ? 'info' : r.type
    logger[level](resultLevelToLogSymbol[r.type] + ' ' + r.result)
  })

  if (results.every(r => r.type !== 'error')) {
    logger.info(`\nYou passed every check, enjoy coding!`)
  } else {
    logger.info(`\nTry \`wi fix\` to do a quick fix.`)
  }
}
