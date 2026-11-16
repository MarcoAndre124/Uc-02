//O caixa precisa informar quanto devolver ao cliente quando o pagamento
//excede o valor da venda

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const valorpago = Number(entrada("Qual valor da compra?"))
const valorcompra = Number(entrada("Qual valor entregue?"))
const total = valorcompra - valorpago

console.log("Valor da compra:", valorpago)
console.log("Valor Recebido:", valorcompra)
console.log("Troco:",total)

