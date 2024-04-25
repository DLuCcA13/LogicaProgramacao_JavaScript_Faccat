/* 

Faça um algoritmo para ler um número que é um código de
usuário. Caso este código seja diferente de um código armazenado internamente
no algoritmo (igual a 1234) deve ser apresentada a mensagem
‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro
valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve
ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta,
deve ser mostrada a mensagem ‘Acesso permitido’.

*/

//Declaraçao de variaveis e atrbuiçao de valores

// Variável "codigousuario" recebe o valor digitado pelo usuário
let codigoUsuario = parseInt(prompt("Digite o código de usuário: "));

// Variável "senha" para receber o valor digitado pelo usuário
let senha = 0;

// Variável "codigoCorreto" recebe o valor 1234
let codigoCorreto = 1234;

// Variável "senhaCorreta" recebe o valor 9999
let senhaCorreta = 9999;

// Estrutura de decisão
// Se o código de usuário for igual ao código correto, então
if (codigoUsuario == codigoCorreto){
  
  // Variável "senha" recebe o valor digitado pelo usuário
  senha = parseInt(prompt("Digite a senha: "));
  
  // Se a senha for igual a senha correta, então
  if (senha == senhaCorreta){
    // Mostra a mensagem "Acesso permitido"
    alert("Acesso permitido");
  }
  // Senão, se a senha for diferente da senha correta, então
  else{
    // Mostra a mensagem "Senha incorreta"
    alert("Senha incorreta");
  }
}
// Senão, se o código de usuário for diferente do código correto, então
else{
  // Mostra a mensagem "Usuário inválido!"
  alert("Usuário inválido!");
}