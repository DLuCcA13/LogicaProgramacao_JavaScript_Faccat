/*

Uma fruteira está vendendo frutas com a seguinte tabela de
preços:
Morango -> até 5kg: R$ 2,50 por Kg | acima de 5Kg: R$ 2,20 por Kg
Maçã  -> até 5kg: R$ 1,80 por Kg | acima de 5Kg: R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra
ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total.
Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a
quantidade (em Kg) de maças adquiridas e escreva o valor a ser
pago pelo cliente.

*/

//Criando variáveis e atrbuindo valores

//Variável "morango" para armazenar a quantidade de morangos
let morango = Number(prompt("Digite a quantidade de morangos (em Kg):"));

//Variável "maca" para armazenar a quantidade de maçãs
let maca = Number(prompt("Digite a quantidade de maçãs (em Kg):"));

//Variável "preco" para armazenar o preço total da compra
let preco = 0;

//Variável "desconto" para armazenar o valor do desconto
let desconto = 0;

//Variável "valor" para armazenar o valor a ser pago pelo cliente
let valor = 0;

//Verificando se a quantidade de morangos é maior que 5Kg
if(morango > 5){
  //Se for maior que 5Kg, o preço por Kg é de R$ 2,20
  preco += morango * 2.20;
}
//Se não for maior que 5Kg
else{
  //O preço por Kg é de R$ 2,50
  preco += morango * 2.50;
}

//Verificando se a quantidade de maçãs é maior que 5Kg
if(maca > 5){
  //Se for maior que 5Kg, o preço por Kg é de R$ 1,50
  preco += maca * 1.50;
}
//Se não for maior que 5Kg
else{
  //O preço por Kg é de R$ 1,80
  preco += maca * 1.80;
}

//Verificando se o valor total da compra é maior que R$ 25,00 ou o total de morangos e maçãs juntos forem maior que 8Kg
if(preco > 25 || (morango + maca) > 8){
  //Se for maior que R$ 25,00 ou o total de morangos e maçãs juntos for maior que 8Kg, o desconto é de 10%
  desconto = preco * 0.1;

  //O valor a ser pago é o valor total da compra menos o desconto
  valor = preco - desconto;

  //Exibindo o valor a ser pago pelo cliente
  console.log("O valor a ser pago pelo cliente é de R$ " + valor.toFixed(2));
}
//Se não for maior que R$ 25,00 ou o total de morangos e maçãs juros for maior que 8Kg
else{
  //O valor a ser pago é o valor total da compra
  valor = preco;

  //Exibindo o valor a ser pago pelo cliente
  console.log("O valor a ser pago pelo cliente é de R$ " + valor.toFixed(2));
}