/* 

Ler as notas da 1a. e 2a. avaliações de um aluno.
Calcular a média aritmética simples e escrever uma mensagem que
diga se o aluno foi ou não aprovado(considerar que nota igual
ou maior que 6 o aluno é aprovado). Escrever também a média calculada

*/

//Declarando as variáveis e atribundo valores

//Variável "nota 1" para armazenar a nota da 1a avaliação
let nota1 = parseFloat(prompt("Digite a primeira nota: "));

//Variável "nota 2" para armazenar a nota da 2a avaliação
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

//Variável "media" para armazenar a média das notas
let medias = (nota1 + nota2) / 2;

//Estrutura de decisão para verificar se o aluno foi aprovado ou não

//Se a média for maior ou igual a 6, o aluno foi aprovado
if (medias > 5){
  console.log("Aprovado");

}
//Se a média for menor que 6, o aluno foi reprovado
else{
  console.log("Reprovado");
}
