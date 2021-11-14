const path = require('path')
const fastGlob = require('fast-glob')

const { workspaces } = require('./package.json')
const entries = fastGlob.sync(
  workspaces.map(ws => path.posix.join(ws, 'package.json'))
)
const scopes = entries
  .map(packageJsons => require(path.join(process.cwd(), packageJsons)))
  .map(pkg => pkg.name)
  .filter(Boolean)
  .map(name => (name.charAt(0) === '@' ? name.split('/')[1] : name))

const commitTypes = [
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'release',
]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', commitTypes],
    'scope-enum': [2, 'always', scopes],
  },
}
