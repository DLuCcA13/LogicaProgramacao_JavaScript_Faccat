/*

Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

*/

//Declarando variaiveis e atrbuindo valores

//Variavel "salarioFixo" recebe o valor do salario fixo do vendedor
let salarioFixo = parseFloat(prompt("Digite o valor do salario fixo do vendedor:"));

//Variavel "comissao" recebe o valor da comissao fixa por carro vendido
let comissao = parseFloat(prompt("Digite o valor da comissao fixa por carro vendido:"));

//Variavel "carrosVendidos" recebe o valor do numero de carros vendidos
let carrosVendidos = parseFloat(prompt("Digite o numero de carros vendidos:"));

//Variavel "valorTotalVendas" recebe o valor total das vendas
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));

//Variavel "salarioFinal" recebe o valor do salario final do vendedor
let salarioFinal = salarioFixo + (comissao * carrosVendidos) + (valorTotalVendas * 0.05);

//saida de dados
console.log("O salario final do vendedor é: " + salarioFinal);
                                 

                                    