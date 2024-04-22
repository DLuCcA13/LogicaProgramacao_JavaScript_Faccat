//Escreva um algoritmo para ler um valor (do teclado) e
//escrever (na tela) o seu antecessor.

//Atribuindo o valor digitado pelo usuário a variável "n"
let n = parseFloat(prompt("Digite um número: "));

//Atribuindo o valor para a variavel "antecessor" através conta para descobrir o antecessor 
let antecessor = n - 1;

//saída de dados
console.log("O antecessor de " + n + " é " + antecessor);