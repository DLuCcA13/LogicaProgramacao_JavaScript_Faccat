/*

Ler 3 valores e escrevê-los em ordem crescente

*/

//Declaração de variáveis e atribuição de valores
//Variavel "num1" recebe o primeiro valor digitado pelo usuário
let num1 = Number(prompt("Digite o primeiro número: "));

//Variavel "num2" recebe o segundo valor digitado pelo usuário
let num2 = Number(prompt("Digite o segundo número: "));

//Variavel "num3" recebe o terceiro valor digitado pelo usuário
let num3 = Number(prompt("Digite o terceiro número: "));

//Estrutura de decisão para verificar qual o maior número e qual o menor número

//Estrutura de decisão para verificar se o primeiro número é o maior
if (num1 > num2 && num1 > num3){
  //Estrutura de decisão para verificar se o segundo número é o menor
  if (num2 < num3){
    //Imprime na tela o resultado
    alert(num1 + ", " + num2 + ", " + num3);
  }
  //Estrutura de decisão para verificar se o terceiro número é o menor
  else{
    //Imprime na tela o resultado
    alert(num1 + ", " + num3 + ", " + num2);
  }
} 
  
//Estrutura de decisão para verificar se o segundo número é o maior
else if(num2 > num1 && num2 > num3){
  //Estrutura de decisão para verificar se o primeiro número é o menor
  if (num1 < num3){
    //Imprime na tela o resultado
    alert(num2 + ", " + num1 + ", " + num3);
  }
  //Estrutura de decisão para verificar se o terceiro número é o menor
  else{
    //Imprime na tela o resultado
    alert(num2 + ", " + num3 + ", " + num1);
  }
}
  
//Estrutura de decisão para verificar se o terceiro número é o maior
else{
  //Estrutura de decisão para verificar se o primeiro número é o menor
  if (num1 < num2){
    //Imprime na tela o resultado
    alert(num3 + ", " + num1 + ", " + num2);
  }
  //Estrutura de decisão para verificar se o segundo número é o menor
  else{
    //Imprime na tela o resultado
    alert(num3 + ", " + num2 + ", " + num1);
  }
}