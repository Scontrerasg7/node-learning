// Haciendo click en el bombillo o aprentndo cmd + . puedo cambiar a ES modules y 
// se refactorizan todos los llamados de las funciones
const os = require('node:os')

console.log('Información del sistema operrativo')
console.log('----------------------')

console.log('Nombre del sitema operativo: ', os.platform());
console.log('Versión del sitema operativo: ', os.release());
console.log('Arquitectura del sitema operativo: ', os.arch());
console.log('CPUs: ', os.cpus().length);
console.log('Memoria libre: ', os.freemem() / 1024 / 1024);
console.log('Memoria total: ', os.totalmem() / 1024 / 1024);