const fs = require('node:fs')

fs.readdir('.', (err, files) => { // Ponen el error como primero en el callback para no olvidarse de hacer el handling
  if (err) {
    console.error('Error al leer el directorio: ', err)
    return;
  }

  files.forEach(file => {
    console.log(file)
  })
})