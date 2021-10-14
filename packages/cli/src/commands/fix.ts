import * as shell from '../utils/shell'
import { createLogger } from '../utils/logger'
import { PrettierDoctor } from '../doctors/prettier'
import { GitDoctor } from '../doctors/git'
import { EslintDoctor } from '../doctors/eslint'

export async function fix() {
  const logger = createLogger(shell.logLevel)
  const prettierDoctor = new PrettierDoctor()
  const gitDoctor = new GitDoctor()
  const eslintDoctor = new EslintDoctor()

  const prettierStatus = await prettierDoctor.check()
  await prettierDoctor.fix(prettierStatus)

  const gitStatus = await gitDoctor.check()
  await gitDoctor.fix(gitStatus)

  const eslintStatus = await eslintDoctor.check()
  await eslintDoctor.fix(eslintStatus)

  logger.info('\nDone! Enjoy your coding!')
}
