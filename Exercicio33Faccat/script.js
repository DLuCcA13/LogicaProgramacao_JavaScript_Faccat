/*

Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.

*/

//Declarando variáveis e atribuindo valores

//Variavel "num1" para armazenar o primeiro valor
let num1 = Number(prompt("Digite o primeiro valor: "));

//Variavel "num2" para armazenar o segundo valor
let num2 = Number(prompt("Digite o segundo valor: "));

//Sistema de condição para verificar se os valores são iguais
//Se os valores forem iguais, imprime a mensagem "Números iguais"
if(num1 == num2){
  console.log("Números iguais");
}
//Se o primeiro valor for maior que o segundo, imprime a mensagem "Primeiro é maior"
else if(num1 > num2){
  console.log("Primeiro é maior");
}
//Se o segundo valor for maior que o primeiro, imprime a mensagem "Segundo é maior"
else{
  console.log("Segundo é maior");
}