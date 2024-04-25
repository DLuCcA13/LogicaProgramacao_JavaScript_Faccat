/*

Faça um algoritmo para ler as 3 notas obtidas por um aluno
nas 3 verificações e a média dos exercícios que fazem parte da avaliação.
Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o
conceito do aluno de acordo com a tabela de conceitos mais abaixo:
Média_de_Aproveitamento = N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios/7
A atribuição de conceitos obedece a tabela abaixo:
Média de Aproveitamento
> = 9,0 A
> = 7,5 e < 9,0 B
> = 6,0 e < 7,5 C
< 6,0 D

*/

//Declando as variáveis e atrbuindo valores

//Variável "nota1" para armazenar a nota da primeira verificação
let nota1 = parseInt(prompt("Digite a nota da primeira verificação: "));

//Variável "nota2" para armazenar a nota da segunda verificação
let nota2 = parseInt(prompt("Digite a nota da segunda verificação: "));

//Variável "nota3" para armazenar a nota da terceira verificação
let nota3 = parseInt(prompt("Digite a nota da terceira verificação: "));

//Variável "mediaExercicios" para armazenar a média dos exercícios
let mediaExercicios = (nota1 + nota2 + nota3)/3;

//Variável "mediaAproveitamento" para armazenar a média de aproveitamento
let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios)/7;

//Estrutura de decisão para verificar o conceito do aluno
//Se a média de aproveitamento for menor que 6,0, o aluno tem conceito D
if (mediaAproveitamento < 6){
  console.log("O aluno tem conceito D");
}
//Se a média de aproveitamento for maior que 6, o aluno tem conceito c
else if(mediaAproveitamento < 7.5){
  console.log("O aluno tem conceito C");
}
//Se a média de aproveitamento for maior que 7.5 , o aluno te conceito B
else if(mediaAproveitamento < 9){
  console.log("O aluno tem conceito B")
}
  //Se a média de aproveitamento for maior que 8.9, o aluno tem conceito A
else{
  console.log("O aluno tem conceito A")
}