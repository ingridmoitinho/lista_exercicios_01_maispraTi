// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('readline-sync').question;

let num = parseInt(prompt("Digite um numero: "));

if (num % 2 === 0) {
  console.log("É par");
} else {
  console.log("É ímpar");
}
