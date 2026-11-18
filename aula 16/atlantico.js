//Uma associação precisa dividir 53 kits igualmente entre 8 equipes e conhecer o saldo

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const kits = Number(entrada("Quais quantidades de kits?"))
const equipe = Number(entrada("Quantas equipes?"))
const porEquipe = Math.floor(kits/equipe); const resto = kits % equipe


console.log("Quantidade de kits:" , kits)
console.log("Quantidade de equipes:",equipe)
console.log("Kits por equipe:" ,porEquipe)
console.log("Kits restantes:",resto)