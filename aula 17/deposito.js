//Um depósito registrou 35 caixas, recebeu 12 e despachou 9.

import PromptSync from "prompt-sync";

const entrada = PromptSync()

let estoque = 35

console.log("Estoque inicial:", estoque, "caixas");

estoque += 12;
console.log("Recebimento:", "+", 12, "caixas");

estoque -= 9;
console.log("Despacho:", "-" ,9, "caixas");

console.log("Estoque final:", estoque, "caixas");