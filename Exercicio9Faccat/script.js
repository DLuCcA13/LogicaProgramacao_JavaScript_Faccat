/*

Escreva um algoritmo para ler o salário mensal atual de um
funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

*/

//Declarando as variáveis e atrbuindo valores

//Variavel "salario"
let salario = parseFloat(prompt("Digite o valor do seu salário: "));

//Variavel "reajuste"
let reajuste = parseFloat(prompt("Digite o valor do reajuste: "));

//Calculando o novo salário
salario = salario + (salario * (reajuste / 100));

//Saida de dados
console.log("O valor do seu novo salário é: " + salario);