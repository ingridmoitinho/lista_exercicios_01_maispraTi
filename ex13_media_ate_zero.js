// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('readline-sync').question;

let total = 0;
let count = 0;
let num;

do {
  num = parseFloat(prompt("Digite um numero (digite 0 para parar): "));
  if (num !== 0) {
    total += num;
    count++;
  }
} while (num !== 0);
console.log("Média: " + (total / count).toFixed(2));
