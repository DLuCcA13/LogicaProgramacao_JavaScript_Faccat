/*

Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: mediafinal = (n1 * 2 + n2 * 3 + n3 * 5)/10

*/

//Declaração de variáveis e atribuindo valores

//Variavel "n1" para armazenar a nota 1
let n1 = parseFloat(prompt("Digite a nota 1: "));

//Variavel "n2" para armazenar a nota 2
let n2 = parseFloat(prompt("Digite a nota 2: "));

//Variavel "n3" para armazenar a nota 3
let n3 = parseFloat(prompt("Digite a nota 3: "));

//Variavel "media" para armazenar a média final
let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10

//Saida de dados
console.log("A média final do aluno é: " + media);