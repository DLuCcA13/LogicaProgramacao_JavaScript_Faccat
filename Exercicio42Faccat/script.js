/*

Uma empresa quer verificar se um empregado está qualificado
para a aposentadoria ou não. Para estar em condições, um dos s
eguintes requisitos deve ser satisfeito:

 - Ter no mínimo 65 anos de idade.
 - Ter trabalhado no mínimo 30 anos.
 - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.

Com base nas informações acima, faça um algoritmo que leia:
o número do empregado (código), o ano de seu nascimento e o ano de seu
ingresso na empresa. O programa deverá escrever a idade e o tempo de
trabalho do empregado e a mensagem 'Requerer aposentadoria' ou
'Não requerer'.

*/

//Declaraçao de variaveis e atrbuiçao de valores

//Variavel "nascimento" recebe o ano de nascimento do empregado
let nascimento = parseInt(prompt("Digite o ano de nascimento do empregado: "));

//Variavel "ingresso" recebe o ano de ingresso do empregado
let ingresso = parseInt(prompt("Digite o ano de ingresso do empregado: "));

//Variavel "anoAtual" recebe o ano atual
let anoAtual = parseInt(prompt("Digite o ano que está: "));

//Variavel "idade" recebe  "anoAtual" menos "nascimento"
let idade = anoAtual - nascimento;

//Variavel "tempoTrabalho" recebe  "anoAtual" menos "ingresso"
let tempoTrabalho = anoAtual - ingresso;

//Estrutura de decisao para verificar se o empregado esta qualificado para a aposentadoria
//Se o empregado tem no mínimo 65 anos 
if(idade > 64){
  console.log("O empregado pode se aposentar");
}
//Se o empregado tem no mínimo 30 anos de trabalho
else if(tempoTrabalho > 29){
  console.log("O empregado pode se aposentar");
}
//Se o empregado tem no mínimo 60 anos e tem no mínimo 25 anos de trabalho
else if (idade > 59 && tempoTrabalho > 24){
  console.log("O empregado pode se aposentar");
}
//Se nenhuma das condiçoes acima for satisfeita
else{
  console.log("O empregado não pode se aposentar");
}