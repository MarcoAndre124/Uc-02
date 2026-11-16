//Uma associação precisa dividir 53 kits igualmente entre 8 equipes e conhecer o saldo

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const kits = Number(entrada("Quais quantidades de kits?"))
const equipe = Number(entrada("Quantas equipes?"))

console.log("Quantidade de kits" , kits)
console.log("Quantidade de equipes",equipe)