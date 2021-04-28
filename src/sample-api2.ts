import { json } from 'body-parser'
import express from 'express'
import { sampleHandler } from './sample-handler'

const app = express()

const PORT = 8082

app.use(json())

app.use(sampleHandler('v1', PORT))

export const startApp = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const server = app.listen(PORT, () => {
        console.info(`Started on port ${PORT}`)
        return resolve()
      })
      server.once('error', (err) => {
        return reject(err)
      })
    } catch (err) {
      reject(err)
    }
  })
}
