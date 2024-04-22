/*

Ler 3 valores e escrever a soma dos 2 maiores.

*/

//Declaração de variáveis e atrbuição de valores
//Variavel "num1" recebe o primeiro valor digitado pelo usuário
let num1 = parseInt(prompt("Digite o primeiro número: "));

//Variavel "num2" recebe o segundo valor digitado pelo usuário
let num2 = parseInt(prompt("Digite o segundo número: "));

//Variavel "num3" recebe o terceiro valor digitado pelo usuário
let num3 = parseInt(prompt("Digite o terceiro número: "));

//Variavel "soma" recebe a soma dos dois maiores valores
let soma;

//Estrutura de decisão para verificar qual é o menor valor
//Se o primeiro valor for menor que o segundo e o terceiro
if((num1 < num2) && (num1 < num3)){
  soma = num2 + num3
  console.log("A soma dos dois maiores valores é: " + soma);
} 
//Se o segundo valor for menor que o primeiro e o terceiro
else if((num2 < num1) && (num2 < num3)){
  soma = num1 + num3
  console.log("A soma dos dois maiores valores é: " + soma);
}
//Se o terceiro valor for menor que o primeiro e o segundo
else{
  soma = num1 + num2
  console.log("A soma dos dois maiores valores é: " + soma);
}