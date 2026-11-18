//uma transportadora deseja registrar quilômetros percorridos por um veiculo antes da emissão de relatórios

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const nome = entrada ("Digite o numero da placa:")
const distancia = Number (entrada ("Digite a distancia:"))
const numero = Number.isFinite(distancia)





console.log("Placa:", nome)
console.log("Distancia (km);", distancia)
console.log("Veiculo", nome)
console.log("Numero finito", numero)




