/*

As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que
leia o número de maçãs compradas, calcule e escreva o custo total da compra.

*/

//Declarandos as variáveis e atrbuindo valores

//Variável "maca" que recebe o número de maçãs compradas
let maca = Number(prompt("Digite o número de maçãs compradas: "));

//Variável "preco" que recebe o preço da maçã
let preco = 1.30;

//Variável "preco2" que recebe o preço da maçã
let preco2 = 1.00;

//Se o número de maçãs for menor que 12, o preço da maçã é 1,30
if (maca < 12){
  console.log("O preço da maçã é R$ 1,30");
  console.log("O preço total da compra é R$ " + maca * preco);
} 
  //Se o número de maçãs for maior que 12, o preço da maçã é 1,00
else {
  console.log("O preço da maçã é R$ 1,00");
  console.log("O preço total da compra é R$ " + maca * preco2);
}

  
