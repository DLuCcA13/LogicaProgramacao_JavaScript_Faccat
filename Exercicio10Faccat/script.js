/*

O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos (aplicados
ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e
os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de
um carro, calcular e escrever o custo final ao consumidor.

*/

//Declarando as variáveis e atrbuindo valores

//Variavel "custoFabrica" para o custo de fábrica do carro
let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

//Variavel "distribuidor" para o custo do distribuidor
let distribuidor = custoFabrica * 0.28;

//Variavel "impostos" para o custo dos impostos
let impostos = custoFabrica * 0.45;

//Variavel "custoConsumidor" para o custo final ao consumidor
let custoConsumidor = custoFabrica + distribuidor + impostos;

//Saida de dados
console.log("O custo final ao consumidor é: R$", custoConsumidor);