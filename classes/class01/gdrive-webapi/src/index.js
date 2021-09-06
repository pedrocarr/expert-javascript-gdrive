import fs from 'fs'
import https from 'https'

const PORT = process.env.PORT || 3000

const localHostSSL = {
  key: fs.readFileSync('./certificates/key.pem'),
  cert: fs.readFileSync('./certificates/cert.pem'),  
}

const server = https.createServer(
  localHostSSL,
  (req, res) => {
    res.end('Hello world')
  }
)

const startServer = () => {
  const { address, port } = server.address()
}

