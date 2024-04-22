/* 

Ler a hora de início e a hora de fim de um jogo de Xadrez
(considere apenas horas inteiras, sem os minutos) e calcule a duração
do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

*/

//Declarando as variáveis e atrbuição de valores

//Variavel "horaInicio" que recebe a hora de inicio do jogo
let horaInicio = parseInt(prompt("Digite a hora de inicio do jogo: "));

//Variavel "horaFim" que recebe a hora de fim do jogo
let horaFim = parseInt(prompt("Digite a hora de fim do jogo: "));

//Variavel "duracao" que recebe a duracao do jogo
let duracao = 0;

//Condicional que verifica se a hora de inicio é maior que a hora de fim
//Se for maior, a variavel "duracao" recebe a diferença entre 24 e a hora de inicio
if (horaInicio > horaFim){
  duracao = 24 - horaInicio + horaFim;
  console.log("O jogo durou " + duracao + " horas");
}
  
//Se não for maior, a variavel "duracao" recebe a diferença entre a hora
else if (horaInicio < horaFim){
  duracao = horaFim - horaInicio;
  console.log("O jogo durou " + duracao + " horas");
}
  
//Se não for maior nem menor, a variavel "duracao" recebe 24
else{
  duracao = 24;
  console.log("O jogo durou " + duracao + " horas");
}

