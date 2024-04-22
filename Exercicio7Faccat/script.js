/* Faça um algoritmo que leia a idade de uma pessoa expressa em
anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
Considerar ano com 365 dias e mês com 30 dias. */

//declarando e atribuindo valores a variaveis

//variavel Ano
let Ano = Number(prompt("Digite quantos anos completos você tem:"))

//variavel Mes
let Mes = Number(prompt("Digite quantos meses se passaram apos seu ultimo aniversario:"))

//variavel Dia
let Dia =  Number(prompt("Escreva o dia que voce esta:"))

//variavel DiaTotal
let diaTotal = (Ano * 365) + (Mes * 30) + Dia

//saida de dados
console.log("Voce tem " + diaTotal + " dias de vida")