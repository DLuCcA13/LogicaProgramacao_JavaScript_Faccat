/*

A jornada de trabalho semanal de um funcionário é de 40 horas.
O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo
é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que
leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras,
//caso tenham sido trabalhadas. (considere que o mês possua 4 semanas exatas).

*/

//Declarandos as variáveis e atrbuindo valores

//Variavel "valorHora" que recebe o valor da hora trabalhada
let valorHora = parseFloat(prompt("Digite o valor da hora trabalhada: "));

//Variavel "horasTrabalhadas" que recebe o total de horas trabalhadas
let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas: "));

//Variavel "salario" que recebe o salário total do funcionário
let salario = valorHora * 160

//Variavel "horasExtras" que recebe o total de horas extras trabalhadas
let horasExtras = horasTrabalhadas - 160;

//Variavel "salarioExtra" que recebe o valor das horas extras com 50% de acréscimo
let salarioExtra = (valorHora * 1.5) * horasExtras;

//Variavel "salarioTotal" que recebe o salário total do funcionário com horas extras
let salarioTotal = salario + salarioExtra;

//Estrutura de decisão que verifica se o funcionário trabalhou mais de 160 horas
//Caso o funcionário trabalhe mais de 160 horas, imprime o salário total do funcionário com hora extra
if (horasTrabalhadas > 160){
  console.log("O salário total do funcionário é: R$ " + salarioTotal);
}
//Caso o funcionário trabalhe menos de 160 horas, imprime o salário total do funcionário
else{
  console.log("O salário total do funcionário é: R$ " + salario);
}