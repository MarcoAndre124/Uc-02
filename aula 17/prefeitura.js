//A recepção precisa emitir a próxima senha de atendimento.


import PromptSync from "prompt-sync";

const entrada = PromptSync()

let senha = 100;

let senhaAnterior = senha;
senha++;

console.log("Senha anterior:", senhaAnterior);
console.log("Próxima senha:", senha);