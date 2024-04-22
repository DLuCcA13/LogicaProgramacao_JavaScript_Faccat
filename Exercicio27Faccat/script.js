/*

Ler um valor e escrever se é positivo, negativo ou zero.

*/

//Declaração de variáveis e atrbuição de valores
//Variavel "n" para receber o valor digitado pelo usuário
let n = parseFloat(prompt("Digite um número: "));

//Condição para verificar se o valor é positivo, negativo ou zero
//Se o valor for maior que zero, imprime "Positivo"
if (n > 0) {
  console.log(`O numero ${n} é positivo`)
}
//Se o valor for igual a zero, imprime "Zero"
else if (n == 0) {
  console.log(`O numero ${n} é Zero`)
}
//Se o valor for menor que zero, imprime "Negativo"
else {
  console.log(`O numero ${n} é negativo`)
}