/*

Faça um algoritmo para ler: quantidade atual em estoque,
quantidade máxima em estoque e quantidade mínima em estoque de um produto.
Calcular e escrever a quantidade
média((quantidade média = quantidade máxima + quantidade mínima)/2).
Se a quantidade em estoque for maior ou igual a quantidade média escrever a
mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.

*/

//Declaração de variável e atrbuição de valor

//Variavel "quantAtual" para a quantidade atual em estoque
let quantAtual = parseInt(prompt("Digite a quantidade atual em estoque: "));

//Variavel "quantMax" para a quantidade máxima em estoque
let quantMax = parseInt(prompt("Digite a quantidade máxima do estoque: "));

//Variavel "quantMin" para a quantidade mínima em estoque
let quantMin = parseInt(prompt("Digite a quantidade mínima do estoque: "));

//Variavel "quantMedia" para a quantidade média
let quantMedia = (quantMax + quantMin) / 2

//Estrutura de decisão para verificar se a quantidade atual é maior ou igual a quantidade média
//Se a quantidade atual for maior ou igual a quantidade média escrever a mensagem '
if(quantMedia <= quantAtual){
  alert("Não efetuar compra! \ntotal no estoque: " + quantAtual + " \nMédia do estoque: " + quantMedia);
} 
//Senão escrever a mensagem 'Efetuar compra'
else{
  alert("Efetuar compra! \ntotal no estoque: " + quantAtual + " \nMédia do estoque: " + quantMedia);
}
