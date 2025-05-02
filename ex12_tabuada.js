// Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for.

const prompt = require('readline-sync').question;

let tabuada = parseInt(prompt("Digite um numero: "));

for (let i = 1; i <= 10; i++) {
  console.log(tabuada + " x " + i + " = " + (tabuada * i));
}
