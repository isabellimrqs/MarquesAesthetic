
import { deletarItem, listCarrinhoCompras, gerarPedido } from "./funcoes.js"
let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"))
let carrinho = document.querySelector('ul')

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null ){
    pedidos = []
}

// cartIndicator(listaCarrinhoDeCompras)
listCarrinhoCompras(listaCarrinhoDeCompras,carrinho)
deletarItem(listaCarrinhoDeCompras)
// valorTotalQuantidade(listaCarrinhoDeCompras)



let btn_finalizar = document.querySelector("#finalize")
    btn_finalizar.forEach(botao => botao.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras,pedidos)))

