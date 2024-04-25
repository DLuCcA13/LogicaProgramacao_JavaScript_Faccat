/*

Escreva um algoritmo que leia o número de litros vendidos
e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina)
onde calcule e imprima o valor a ser pago pelo cliente sabendo-se que o
preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
Obs:
Álcool:
até 20 litros, desconto de 3% por litro;
acima de 20 litros, desconto de 5% por litro.
Gasolina:
até 20 litros, desconto de 4% por litro;
acima de 20 litros, desconto de 6% por litro.

*/

//Declarando as variaveis e atribuindo valores

//Variavel "combustivel" para armazenar o tipo de combustivel
let combustivel = prompt("Digite o tipo de combustivel (A-álcool, G-gasolina) :")

//Variavel "litros" para armazenar a quantidade de litros vendidos
let litros = Number(prompt("Digite a quantidade de litros vendidos:"));

//Variavel "preco" para armazenar o preço do litro do combustivel
let preco;

//Sessão de condições para determinar o preço do litro do combustivel
//Se o combustivel for igual a "A"
if (combustivel == "A") {
  //Se a quantidade de litros for menor que 20
  if (litros < 20) {
    //O preço do litro do combustivel será 2.90
    preco = litros * 2.90 - (litros * 2.90 * 0.03);
    console.log("O preço a ser pago é de R$ " + preco);
  }
  //Se a quantidade de litros for igual a 20
  else if (litros == 20){
    preco = litros * 2.90;
    console.log("O preço a ser pago é de R$ " + preco);
  }
  
}