// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('readline-sync').question;

console.log("1 - Opção A");
console.log("2 - Opção B");
console.log("3 - Opção C");

let opcao = parseInt(prompt("Escolha uma opcao: "));

switch (opcao) {
  case 1:
    console.log("Você escolheu a Opção A");
    break;
  case 2:
    console.log("Você escolheu a Opção B");
    break;
  case 3:
    console.log("Você escolheu a Opção C");
    break;
  default:
    console.log("Opção inválida");
}
