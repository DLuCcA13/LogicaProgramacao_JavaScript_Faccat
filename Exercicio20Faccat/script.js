/*

Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

*/

//Declaranção de variáveis e atrbuição de valores

//Variável "num1" para armazenar o primeiro valor
let num1 = Number(prompt("Digite o primeiro número: "));

//Variável "num2" para armazenar o segundo valor
let num2 = Number(prompt("Digite o segundo número: "));

//Estrutura de decisão para verificar se o primeiro valor é maior que o segundo
//Caso seja, imprime o segundo valor e depois o primeiro valor
if (num1 > num2){
  console.log(num2, num1)
}
//Caso não seja, imprime o primeiro valor e depois o segundo valor
else{
  console.log(num1, num2)
}