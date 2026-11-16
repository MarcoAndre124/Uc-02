//Uma clínica deseja calcular o IMC como indicador inicial de triagem, sem
//emitir diagnóstico.

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const peso = Number(entrada("Qual peso?"))
const altura = Number(entrada("Qual altura"))
const total = peso + (altura**2)

console.log("Peso (kg):", peso)
console.log("Altura (m):", altura )
console.log("IMC:",total )


