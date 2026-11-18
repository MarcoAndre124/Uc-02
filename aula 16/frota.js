//O setor de transportes compara a eficiência de um veículo em uma rota

import PromptSync from "prompt-sync";

const entrada = PromptSync()
const quilometros = Number(entrada("Quantos quilometros percorridos?"))
const litro = Number(entrada("Quantos litros consumidos?"))
const consumo = Math.floor = quilometros / litro


console.log("Quilometros percorridos",quilometros)
console.log("Litro consumidos",litro)
console.log("Consumo médio:",consumo.toFixed(2) , "Km/L")
