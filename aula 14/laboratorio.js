import PromptSync from "prompt-sync";

const prompt = PromptSync()

const temperatura = Number( prompt ("Digite uma Temperatura:"))

const tempo = Number(temperatura,replace(",","."))

console.log(tempo)
