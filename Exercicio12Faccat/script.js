/*

Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius.

*/

//Declarando de variaveis e atribuindo valores

//Variavel "fahrenheit" para receber o valor em Fahrenheit
let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

//Variavel "celsius" para receber o valor em Celsius
let celsius = (fahrenheit - 32) * 5 / 9;

//Saida de dados
console.log("A temperatura em Celsius é: " + celsius);
