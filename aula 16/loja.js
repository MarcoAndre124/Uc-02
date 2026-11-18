//O gerente quer atualizar um subtotal de R$ 200 com uma taxa de serviço
//de 5%


import PromptSync from "prompt-sync";

const entrada = PromptSync()

let subtotal = 200;

console.log("Subtotal inicial: R$", subtotal.toFixed(2));

subtotal += subtotal * 0.05;

console.log("Taxa de serviço: 5%");
console.log("Total atualizado: R$", subtotal.toFixed(2))