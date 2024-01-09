// Objeto global **process**: infromación y control del proceso actual de ejecución

// Recuperar los argumentos de la línea de comandos
console.log(process.argv)

// Controlar proceso y salida
// process.exit(1)

// Podemos controalr eventos del proceso
process.on('exit', () => {
  // limpiar los recursos por ejemplo
})

// current working directory (desde dónde ejecuto el archivo)
console.log(process.cwd())