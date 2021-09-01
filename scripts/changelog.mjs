import cp from 'child_process'
import path from 'path'
import { readFileSync } from 'fs'
import { promisify } from 'util'

import pLimit from 'p-limit'
import fastGlob from 'fast-glob'

const bin = './node_modules/.bin/conventional-changelog'
const exec = promisify(cp.exec)

const rootPackgeJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf-8')
)
const { workspaces } = rootPackgeJson

const packages = workspaces.map(ws =>
  path.resolve(process.cwd(), ws, 'package.json')
)
const entries = fastGlob.sync(packages)

const limit = pLimit(1)

await Promise.all(
  entries.map(entry => {
    const commitPath = path.dirname(entry)
    const md = `${commitPath}/CHANGELOG.md`
    return limit(() => exec(`git checkout HEAD -- ${md}`))
  })
)

await Promise.all(
  entries.map(entry => {
    const { name } = JSON.parse(readFileSync(entry, 'utf-8'))
    const commitPath = path.dirname(entry)
    const outfile = `${commitPath}/CHANGELOG.md`
    const tagPrefix = `${name}@`
    const cmd = `${bin} --preset angular --commit-path ${commitPath} --pkg ${entry} --infile ${outfile} --same-file --tag-prefix ${tagPrefix}`
    return limit(() => exec(cmd))
  })
)
