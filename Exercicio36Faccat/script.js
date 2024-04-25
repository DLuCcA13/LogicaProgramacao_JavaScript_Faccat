/*

Escreva um algoritmo que leia as idades de 2 homens e de 2
mulheres (considere que as idades dos homens serão sempre diferentes entre si,
bem como as das mulheres). Calcule e escreva a soma das idades do homem mais
velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.

*/

//Criação de variáveis e atribuição de valores

//Variável "homem1" recebe o valor digitado pelo usuário
let homem1 = Number(prompt("Digite a idade do primeiro homem: "));

//Variável "homem2" recebe o valor digitado pelo usuário
let homem2 = Number(prompt("Digite a idade do segundo homem: "));

//Variável "mulher1" recebe o valor digitado pelo usuário
let mulher1 = Number(prompt("Digite a idade da primeira mulher: "));

//Variável "mulher2" recebe o valor digitado pelo usuário
let mulher2 = Number(prompt("Digite a idade da segunda mulher: "));

//Variável "soma" recebe o valor da soma das idades do homem mais velho
let soma;

//Variável "produto" recebe o valor do produto das idades do homem
let produto;

//Condição para verificar qual homem é mais velho
//Se homem1 for maior que homem2
if(homem1 > homem2){
  //Variável "soma" recebe o valor da soma das idades do homem mais velho com a mulher mais nova
  soma = homem1 + mulher2;

  //Variável "produto" recebe o valor do produto das idades do homem mais novo com a mulher mais velha
  produto = homem2 * mulher1;

  //Imprime na tela a soma das idades do homem mais velho com a mulher mais nova
  console.log("A soma das idades do homem mais velho com a mulher mais nova é " + soma + " anos." + "\n" + "O produto das idades do homem mais novo com a mulher mais velha é " + produto + " anos.")
}
//Se homem2 for maior que homem1
else{
  //Variável "soma" recebe o valor da soma das idades do homem mais velho com a mulher mais nova
  soma = homem2 + mulher1;

  //Variável "produto" recebe o valor do produto das idades do homem mais novo com a mulher mais velha
  produto = homem1 * mulher2;

  //Imprime na tela a soma das idades do homem mais velho com a mulher mais nova
  console.log("A soma das idades do homem mais velho com a mulher mais nova é " + soma + " anos." + "\n" + "O produto das idades do homem mais novo com a mulher mais velha é " + produto + " anos.")
}