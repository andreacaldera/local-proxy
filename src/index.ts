import express from 'express'
import proxy from 'express-http-proxy'
import fs from 'fs'
import https from 'https'

const app = express()

const PORT = 443

// app.use('/auth-api', proxy('http://localhost:9000/'));

// app.use('/auth', proxy('http://localhost:9000/'))
// app.use('/authorize', proxy('http://localhost:9000/authorize'))
// app.use('/', proxy('http://localhost:3000/'))

app.use('/v1', proxy('http://localhost:8081/'))
app.use('/v2', proxy('http://localhost:8082/'))

https
  .createServer(
    {
      key: fs.readFileSync('example.key'),
      cert: fs.readFileSync('example.crt'),
    },
    app,
  )
  .listen(PORT, () => {
    console.log(`Example app listening - go to https://localhost:${PORT}/`)
  })
