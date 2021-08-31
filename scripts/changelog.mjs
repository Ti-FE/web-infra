import os from 'os'
import cp from 'child_process'
import path from 'path'
import { readFile } from 'fs/promises'
import { promisify } from 'util'

import pLimit from 'p-limit'
import fastGlob from 'fast-glob'

const bin = './node_modules/.bin/conventional-changelog'
const exec = promisify(cp.exec)

const rootPackgeJson = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url), 'utf-8')
)
const { workspaces } = rootPackgeJson

const packages = workspaces.map(ws =>
  path.resolve(process.cwd(), ws, 'package.json')
)
const entries = fastGlob.sync(packages)

const limit = pLimit(os.cpus().length)

await Promise.all(
  entries.map(entry => {
    const commitPath = path.dirname(entry)
    const outfile = `${commitPath}/CHANGELOG.md`
    const cmd = `${bin} --preset angular --release-count 0 --commit-path ${commitPath} --pkg ${entry} --outfile ${outfile}`
    return limit(() => exec(cmd))
  })
)
