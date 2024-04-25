/*

Faça um teste de mesa com o seguinte algoritmo

*/

//Declarando variáveis e atribuindo valores 

//Variavel "x" para receber o primeiro valor 
let x = Number(prompt("Digite o primeiro valor: "));

//Variavel "y" para receber o segundo valor
let y = Number(prompt("Digite o segundo valor: "));

//Variavel "z" para efetuar a conta
let z = x * y + 5;

//Variavel "resposta" para receber a resposta
let resposta;

//Estrutura de decisão para verificar se o valor de "z" é menor que 0 ou maior que 100
//Se for menor que 0, variavel "resposta" recebe "A"
if(z < 1){
  resposta = "A"
}
//Se for menor ou igual que 100, variavel "resposta" recebe "B"
else if(z < 101){
  resposta = "B"
}
//Se for maior que 100, variavel "resposta" recebe "C"
else{
  resposta = "C"
}

//saida de dados
console.log(z + "\n" + resposta)
