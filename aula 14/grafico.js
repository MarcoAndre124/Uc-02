import PromptSync from "prompt-sync";

const entrada = PromptSync()

const pagina = parseInt(entrada ("Quantidade de paginas:"))
const preco = parseFloat(entrada ("Preço por pagina:"))


const total = pagina * preco


console.log(preco)
console.log(pagina)
console.log("Total",total)