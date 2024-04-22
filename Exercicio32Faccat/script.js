/*
Ler o nome de 2 times e o número de gols marcados na partida
(para cada time). Escrever o nome do vencedor.
Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

//Declaração de variáveis e atrbuição de valores
//Variavel "time1" recebe o nome do time 1
let time1 = prompt("Digite o nome do time 1: ");

//Variavel "time2" recebe o nome do time 2
let time2 = prompt("Digite o nome do time 2: ");

//Variavel "golsTime1" recebe o numero de gols do time 1
let golsTime1 = parseInt(prompt("Digite o numero de gols do time 1: "));

//Variavel "golsTime2" recebe o numero de gols do time 2
let golsTime2 = parseInt(prompt("Digite o numero de gols do time 2: "));

//Estrutura de decisão para verificar o vencedor
//Se o numero de gols do time 1 for maior que o time 2
if (golsTime1 > golsTime2) {
  //Imprime o nome do time 1
  alert("O vencedor é o time: " + time1);
}
//Se o numero de gols do time 2 for maior que o time 1
else if (golsTime2 > golsTime1) {
  //Imprime o nome do time 2
  alert("O vencedor é o time: " + time2);
}
//Se os gols forem iguais
else {
  //Imprime a palavra "EMPATE"
  alert("EMPATE");
}