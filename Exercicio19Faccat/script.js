/*

Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

*/

//Declando as variáveis e atrbuindo valores

//Variável "num1" para armazenar o primeiro valor
let num1 = prompt("Digite o primeiro número: ");

//Variável "num2" para armazenar o segundo valor
let num2 = prompt("Digite o segundo número: ");

//Condicional para verificar qual dos dois valores é maior
//Se o primeiro valor for maior que o segundo, imprime na tela o primeiro valor
if (num1 > num2) {
  console.log("O maior valor é: " + num1);
}
//Se o segundo valor for maior que o primeiro, imprime na tela o segundo valor
else {
  console.log("O maior valor é: " + num2);
}