//Uma empresa de entregas precisa estimar a quantidade de combustível e o custo de uma
//viagem antes da saída do veículo.

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const nome = entrada ("Digite o nome do Motorista:")
const distancia = Number(entrada("Qual distancia percorrida?"))
const consumo = Number(entrada("Qual consumo medio?"))
const preco = Number(entrada("Qual preço por litro?"))
const necessario = Number(entrada("Quanto de combustivel necessario?"))
const total = necessario * preco 

console.log("Motorista:",nome)
console.log("Distancia (Km):",distancia)
console.log("Consumo medio (Km/L):",consumo)
console.log("Preço por litro:", preco)
console.log("Combustivel necessario (L):",necessario )
console.log("Custo estimado",total)


