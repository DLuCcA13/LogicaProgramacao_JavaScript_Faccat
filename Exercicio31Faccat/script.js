/*
Ler 3 valores (A, B e C) representando as medidas dos lados
de um triângulo e escrever se formam ou não um triângulo.
OBS: para formar um triângulo, o valor de cada lado deve ser menor que a
soma dos outros 2 lados.

*/

//Declaração de variáveis e atrbuição de valores
//Variavel "a" recebe o valor do lado a digitado pelo usuário
let a = Number(prompt("Digite o valor do lado A: "));

//Variavel "b" recebe o valor do lado b digitado pelo usuário
let b = Number(prompt("Digite o valor do lado B: "));

//Variavel "c" recebe o valor do lado c digitado pelo usuário
let c = Number(prompt("Digite o valor do lado C: "));

//Verificação se os valores digitados formam um triângulo
//Se a soma de dois lados for maior que o terceiro lado, formam um triângulo
if (a < b + c && b < a + c && c < a + b){
  alert("Formam um triângulo!");
}
//Se a soma de dois lados for menor que o terceiro lado, não formam um triângulo
else{
  alert("Não formam um triângulo!");
}

