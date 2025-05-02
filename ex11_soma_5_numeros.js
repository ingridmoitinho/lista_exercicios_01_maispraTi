// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('readline-sync').question;

let soma = 0;

for (let i = 0; i < 5; i++) {
  let n = parseFloat(prompt("Digite o numero " + (i + 1) + ": "));
  soma += n;
}
console.log("Soma total: " + soma);
