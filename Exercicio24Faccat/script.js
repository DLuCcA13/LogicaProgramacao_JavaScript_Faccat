/*

Ler o salário fixo e o valor das vendas efetuadas pelo
vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3%
sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.

*/

//Declaranção de variáveis e atrbuição de valores

//Variavel "salarioFixo" armazena o valor do salário fixo
let salarioFixo = parseFloat(prompt("Digite o salário fixo: "));

//Variavel "valorVendas" armazena o valor das vendas
let valorVendas = parseFloat(prompt("Digite o valor das vendas: "));

//Variavel "salarioTotal" armazena o valor do salário total
let salarioTotal;

//Estrutura de decisão
//Se o valor das vendas for menor ou igual a 1500, o salário total é igual ao salário fixo mais o valor das vendas multiplicado por 3%
if (valorVendas < 1500){
  salarioTotal = salarioFixo + (valorVendas * 0.03);
  console.log("O salário total é: " + salarioTotal);
}
//Se o valor das vendas for maior que 1500, o salário total é igual ao salário fixo mais o valor das vendas multiplicado por 3% mais o valor das vendas multiplicado por 5%
else{
  salarioTotal = salarioFixo + (valorVendas * 0.03) + ((valorVendas - 1500) * 0.05);
  console.log("O salário total é: " + salarioTotal);
}