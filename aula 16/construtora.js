//A equipe de obras quer estimar a área de uma sala retangular para comprar
//revestimento

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const comprimento = Number(entrada("Qual comprimento?"))
const largura = Number(entrada("Qual largura?"))


const total = comprimento * largura 

console.log("Comprimento (m):",comprimento)
console.log("Largura (m):",largura.toFixed(1))
console.log("Area do piso: ", total.toFixed(2),  "m²")