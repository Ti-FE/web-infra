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

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
  },
}
