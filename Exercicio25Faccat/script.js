/*

Faça um algoritmo para ler: número da conta do cliente,
saldo, débito e crédito. Após, calcular e escrever o saldo atual
(saldo atual = saldo - débito + crédito). Também testar se saldo atual
for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
senão escrever a mensagem 'Saldo Negativo'.

*/

//Declaração de variáveis e atrbuição de valores

//Variavel "conta" para armazenar o número da conta do cliente
let conta = Number(prompt("Digite o número da conta do cliente: "));

//Variavel "saldo" para armazenar o saldo do cliente
let saldo = Number(prompt("Digite o saldo do cliente: "));

//Variavel "debito" para armazenar o débito do cliente
let debito = Number(prompt("Digite o débito do cliente: "));

//Variavel "credito" para armazenar o crédito do cliente
let credito = Number(prompt("Digite o crédito do cliente: "));

//Variavel "saldoAtual" para armazenar o saldo atual do cliente
let saldoAtual = saldo - debito + credito;

//Estrutura de decisão para verificar se o saldo atual é positivo ou negativo
//Se o saldo atual for maior ou igual a zero, escrever a mensagem "Saldo Positivo"
if (saldoAtual > -1){
  console.log("Saldo Positivo");
}
//Senão, escrever a mensagem "Saldo Negativo"
else{
  console.log("Saldo Negativo");
}
