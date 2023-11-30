import { deletarItem, carrinhoCompras, gerarPedido, valorTotalQuantidade } from "./funcoes.js"
let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"))
 
let htmlItensCarrinho = document.querySelector('ul')
 
let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null ){
    pedidos = []
}
 
 
//cartIndicator(listaCarrinhoDeCompras)
carrinhoCompras(listaCarrinhoDeCompras, htmlItensCarrinho)
deletarItem(listaCarrinhoDeCompras)
valorTotalQuantidade(listaCarrinhoDeCompras)
 
 
let btn_finalizar = document.querySelector("#finalize")
    btn_finalizar.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras,pedidos))