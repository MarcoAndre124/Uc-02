//A recepção precisa obter os valores necessários para o cálculo de uma
//reserva.

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const nome = entrada ("Digite o nome do hospede:")
const quantidade_diaria = Number(entrada("Quantas diarias?"))
const valor = Number(entrada("Digite o valor da diaria:"))

const total = quantidade_diaria * valor 


console.log("Hospede: ",nome)
console.log("Diarias: ",quantidade_diaria)
console.log("Valor da diaria: ", valor)
console.log("Total bruto: ",total)