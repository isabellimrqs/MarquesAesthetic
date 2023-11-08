import { deletarItem, listCarrinhoCompras, gerarPedido } from "./funcoes.js"
let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"))
let carrinho = document.querySelector('ul')

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null ){
    pedidos = []
}
console.log(pedidos)

listCarrinhoCompras(listaCarrinhoDeCompras,carrinho)
deletarItem(listaCarrinhoDeCompras)

let btn_finalizar = document.querySelectorAll(".btn_area button:nth-child(2)")
    btn_finalizar.forEach(botao => botao.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras,pedidos)))



    
    

