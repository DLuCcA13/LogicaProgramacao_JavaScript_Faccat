/*

Faça um teste de mesa e complete o quadro a seguir
para os seguintes valores das variáveis:
a b C
1 2 3
3 4 5
2 2 4
4 4 4
5 3 3

*/

//Declaraçao de variaveis e atrbuiçao de valores
//Variavel "a" que recebe o valor do lado A que o usuário ira digitar
let a = Number(prompt("Digite o valor do lado A: "));

//Variavel "b" que recebe o valor do lado B que o usuário ira digitar
let b = Number(prompt("Digite o valor do lado B: "));

//Variavel "c" que recebe o valor do lado C que o usuário ira digitar
let c = Number(prompt("Digite o valor do lado C: "));

//Estrutura de decisao para verificar se é um triangulo 
//Se a soma de dois lados for maior que o terceiro,  é um triangulo
if (a < b + c && b < a + c && c < a + b){
  //Se todos os lados forem iguais, é um triangulo equilatero
  if (a == b && b == c){
    //Imprime na tela que é um triangulo equilatero
    console.log("É um triangulo equilatero");
  }
  //Se dois lados forem iguais, é um triangulo isosceles
  else if((a == b) || (b == c) || (a==c)){
    //Imprime na tela que é um triangulo isosceles
    console.log("É um triangulo isosceles");
  }
  //Se nenhum dos lados forem iguais, é um triangulo escaleno
  else{
    //Imprime na tela que é um triangulo escaleno
    console.log("É um triangulo escaleno");
  }
}
//Se nao for um triangulo, imprime na tela que não é um triangulo
else{
  //Imprime na tela que não é um triangulo
  console.log("Não é um triangulo");
}
