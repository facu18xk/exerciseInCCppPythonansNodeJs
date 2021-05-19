const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Introduzca el arista:', arista => {
  console.log(`El volumen es: ${arista*arista*arista}`);
  readline.close();
});