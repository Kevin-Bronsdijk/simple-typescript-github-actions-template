import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const fullPath = core.getInput('full-path')
    core.debug(`fullPath: ${fullPath}`)

    core.debug(`debug`)

    core.setOutput('x', 'y')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
