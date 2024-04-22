/*

Escreva um algoritmo para ler o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores.

*/

//Declara as variáveis e atribuindo seus valores

//variavel "toalEleitores" recebe o valor do total de eleitores
let totalEleitores = parseInt(prompt("Informe o total de eleitores: "));

//variavel "votosBrancos" recebe o valor do total de votos brancos
let votosBrancos = parseInt(prompt("Informe o total de votos brancos: "));

//variavel "votosNulos" recebe o valor do total de votos nulos
let votosNulos = parseInt(prompt("Informe o total de votos nulos: "));

//variavel "votosValidos" recebe o valor do total de votos válidos
let votosValidos = parseInt(prompt("Informe o total de votos válidos: "));

//variavel "percentualBrancos" recebe o valor do percentual de votos brancos
let percentualBrancos = (votosBrancos / totalEleitores) * 100;

//variavel "percentualNulos" recebe o valor do percentual de votos nulos
let percentualNulos = (votosNulos / totalEleitores) * 100;

//variavel "percentualValidos" recebe o valor do percentual de votos válidos
let percentualValidos = (votosValidos / totalEleitores) * 100;

//saida de dados
console.log("O toal de eleitores é: " + totalEleitores)
console.log("O percentual de votos brancos é: " + percentualBrancos + "%");
console.log("O percentual de votos nulos é: " + percentualNulos + "%");
console.log("O percentual de votos válidos é: " + percentualValidos + "%");