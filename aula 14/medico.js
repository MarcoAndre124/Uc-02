import PromptSync from "prompt-sync";

const prompt = PromptSync()

const nome = prompt("Digite seu Nome:")
const idade = parseInt(prompt("Digite sua Idade:"))
const bairro = prompt(" Digite seu Bairro:")


console.log("Nome",nome)
console.log("Idade",idade)
console.log("Bairro",bairro)
console.log('Ficha:${nome} | ${idade} | ${bairro}')