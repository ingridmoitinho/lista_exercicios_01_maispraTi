// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('readline-sync').question;

let n = parseInt(prompt("Digite um numero: "));
let fat = 1;

for (let i = 1; i <= n; i++) {
  fat *= i;
}
console.log("Fatorial: " + fat);
