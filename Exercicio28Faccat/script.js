/*

Ler 3 valores  e escrever o maior deles

*/

//Declaração de variáveis e atribuição de valores
//Variavel "num1" recebe o primeiro valor digitado pelo usuário
let num1 = prompt("Digite o primeiro número: ");

//Vaariavel "num2" recebe o segundo valor digitado pelo usuário
let num2 = prompt("Digite o segundo número: ");

//Variavel "num3" recebe o terceiro valor digitado pelo usuário
let num3 = prompt("Digite o terceiro número: ");

//Condição para verificar qual é o maior número
//Se o primeiro número for maior que o segundo e o terceiro
if (num1 > num2 && num1 > num3){
  //Imprime na tela o primeiro número
  console.log("O maior número é: " + num1);
}
//Se o segundo número for maior que o primeiro e o terceiro
else if (num2 > num1 && num2 > num3){
  //Imprime na tela o segundo número
  console.log("O maior número é: " + num2);
}
//Se o terceiro número for maior que o primeiro e o segundo
else{
  //Imprime na tela o terceiro número
  console.log("O maior número é: " + num3);
}