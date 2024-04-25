/*

Faça um algoritmo para ler: a descrição do produto (nome),
a quantidade adquirida e o preço unitário. Calcular e escrever o total
(total = quantidade adquirida * preço unitário), o desconto e o total a
pagar (total a pagar = total - desconto), sabendo-se que:
 - Se quantidade <= 5 o desconto será de 2%
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 - Se quantidade > 10 o desconto será de 5%


*/

//Declaraçao de variaveis e atrbuiçao de valores
//Variavel "nome" recebe o valor digitado pelo usuario
let nome = prompt("Digite o nome do produto: ");

//Variavel "quantidade" recebe o valor digitado pelo usuario
let quantidade = Number(prompt("Digite a quantidade adquirida: "));

//Variavel "preco" recebe o valor digitado pelo usuario
let preco = Number(prompt("Digite o preço unitário: "));

//Variavel "total" recebe o valor da variavel "quantidade" multiplicado pela variavel
let total = quantidade * preco;

//Variavel "totalPagar" para receber o valor da variavel "total" menos a variavel "desconto"
let totalPagar = 0;

//Variavel "desconto" para receber o valor da variavel "total" multiplicado pelo percentual de desconto
let desconto = 0;

//Estrutura de decisao para verificar se a variavel "quantidade" é menor ou igual a 5
//Se a condiçao for verdadeira, a variavel "desconto" recebe o valor de 2% da variavel "total"
if (quantidade < 6) {
  //Variavel "desconto" recebe o valor de 2% da variavel "total"
  desconto = total * 0.02;

  //Variavel "totalPagar" recebe o valor da variavel "total" menos a variavel "desconto"
  totalPagar = total - desconto;

  console.log("O total a pagar é: " + totalPagar);

}
//Estrutura de decisao para verificar se a variavel "quantidade" é maior ou igual a 6 e menor ou igual a 10
else if (quantidade < 5 && quantidade < 11) {
  //Variavel "desconto" recebe o valor de 3% da variavel "total"
  desconto = total * 0.03;

  //Variavel "totalPagar" recebe o valor da variavel "total" menos a variavel "desconto"
  totalPagar = total - desconto;

  console.log("O total a pagar é: " + totalPagar);

}
//Estrutura de decisao para verificar se a variavel "quantidade" é maior ou igua a 10
else {
  //Variavel "desconto" recebe o valor de 5% da variavel "total"
  desconto = total * 0.05;

  //Variavel "totalPagar" recebe o valor da variavel "total" menos a variavel "desconto"
  totalPagar = total - desconto;

  console.log("O total a pagar é: " + totalPagar);
}

