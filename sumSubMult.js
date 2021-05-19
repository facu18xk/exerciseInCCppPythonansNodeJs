
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Ingresa un numero: ',n1=> {
  readline.question('Ingresa un segundo numero: ',n2 => {
    let n = parseInt(n1), n3= parseInt(n2);
    console.log(`La suma es: ${n+n3},  la resta es: ${n-n3}, la multiplicacion es ${n*n3}, y la division es ${n/n3}`)
    readline.close();
  });
});

// let sum = n1+n2,sub=n1-n2,mult = n1*n2,div = n1/n2;
// n3.forEach(el => {
//   sum += el;
//   mult*=el;
//   sub-=el;
//   div/=el;
// });