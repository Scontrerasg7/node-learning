const path = require('node:path')

// Barra separadora de carpetas según SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Nombre del archivo
const base = path.basename('tmp/sebas-secret-files/password.txt')
console.log(base)

// Nombre del archivo sin extensión
const filename = path.basename('tmp/sebas-secret-files/password.txt', '.txt')
console.log(filename)

// Extensión
const extension = path.extname('my.super.image.jpg')
console.log(extension)
