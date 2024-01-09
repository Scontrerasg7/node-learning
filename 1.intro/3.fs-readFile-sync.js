const fs = require('node:fs')

// const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log('Primer texto: ', text)
})
// console.log(text)

console.log('Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo...')
// const secondText = fs.readFileSync('./')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('Segundo texto: ', text)
})