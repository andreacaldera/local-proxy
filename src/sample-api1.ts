import express from 'express'

const app = express()

const PORT = 8081

app.use((req, res) => {
  res.send(`Response from v1 on port ${PORT} using URL ${req.originalUrl}`)
})

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
