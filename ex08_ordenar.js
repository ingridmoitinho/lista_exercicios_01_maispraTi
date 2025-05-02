// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('readline-sync').question;

let val1 = parseInt(prompt("Digite o primeiro valor: "));
let val2 = parseInt(prompt("Digite o segundo valor: "));

if (val1 < val2) {
  console.log(val1 + ", " + val2);
} else {
  console.log(val2 + ", " + val1);
}
