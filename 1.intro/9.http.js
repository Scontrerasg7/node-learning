const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000 // se pasa el puerto por la línea de comandos `PORT=3000 node 9.http.js `

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
  })
})


// Esta práctica no es recomendable en producción porque uno siempre busca tirarlo al 80
// server.listen(0, () => { // Usa el primer puerto que encuentra
//   console.log(`server listening on port http://localhost:${server.address().port}`)
// })