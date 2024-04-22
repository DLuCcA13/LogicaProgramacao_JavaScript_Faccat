/*

Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).

*/

//Declarando variáveis e atribuindo valores

//Variavel "numero" recebe o numero digitado pelo usuário
let numero = Number(prompt("Digite um número: "))

//Verificando se o número é positivo ou negativo

//Se o número for maior que zero, ele é positivo
if (numero >= 0){
  //Caso o número seja positivo
  console.log(numero + " é positivo")
} 
//Se o número for menor que zero, ele é negativo
else{
  //Caso o número seja negativo
  console.log(numero + " é negativo")
}
