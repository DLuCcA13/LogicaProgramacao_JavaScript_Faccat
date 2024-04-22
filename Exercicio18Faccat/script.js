/* 

Ler o ano atual e o ano de nascimento de uma pessoa.
Escrever uma mensagem que diga se ela poderá ou não votar este ano
(não é necessário considerar o mês em que a pessoa nasceu).

*/

// Declaração de variáveis e atrbuição de valores

//Varialvel "anoAtual" para armezenar o ano atual
let anoAtual = prompt("Digite o ano atual: ");

//Varialvel "anoNascimento" para armezenar o ano de nascimento
let anoNascimento = prompt("Digite o ano de nascimento: ");

//Varialvel "idade" para armezenar a idade
let idade = anoAtual - anoNascimento;

//Estrutura de decisão para verificar se a pessoa pode ou não votar este ano

//Se a idade for menor que 15, a pessoa nao pode votar
if (idade < 15){
  console.log("Você não pode votar este ano.");
}
//Se a idade for maior que 15, a pessoa pode votar
else{
  console.log("Você pode votar este ano.");
}
