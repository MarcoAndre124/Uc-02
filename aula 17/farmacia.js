//m cliente ganhou 50 pontos, teve bônus de 20 e utilizou 15 pontos.

import PromptSync from "prompt-sync";

const entrada = PromptSync()

let pontuacao = 50

console.log("Pontos Iniciais:", pontuacao)
pontuacao +=20
console.log("Bonus:",  "+",20)
pontuacao -=15
console.log("Pontos utilizados:", "-" ,15)

console.log("Salvo de pontos", pontuacao)
