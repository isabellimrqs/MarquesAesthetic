// Esta funcao carrega todos os produtos nas paginas HOME e PRODUTOS.Ela recebe 2 parametros: A lista dos produtos que será renderizada, e o local onde o HTML será injetado

export function carregaProdutos (lista, gridProduto){
    lista.forEach(item => {
    let html = ` <div class="product_card" id=${item.codigoProduto}>
    <a href="produto1.html" id=${item.codigoProduto}>
        <img class="product_image" src="${item.imagemProduto}" id=${item.codigoProduto}>
        <div class="title_price">
            <p>${item.nomeProduto}</p>
            <h3>${item.preco}</h3>
            </div>
    </a>
</div>`
    gridProduto.innerHTML += html
    });
}

// Esta funcao adiciona o evento click nos cards de produtos. Ela captura o id do elemento e salva no local storage.
export function handleClick(){
    let cardProdtuos = document.querySelectorAll(".product_card")
        cardProdtuos.forEach(card => card.addEventListener('click', (e) => {
    let idProd = e.target.id
        localStorage.setItem("IdProd",idProd)
    }))

}

// Esta funcao localiza um item em uma lista de items: recebe 2 paramentos: A lista de itens, como o catalogo de produtos, e o ID(codigo do produto) que deverá ser encontrado.
export function findItem(items, Id){
    let item = items.find(produto => produto.codigoProduto == Id)
    return item
}

// Esta funcao carrega o produto encontrado pela funcao findItem na pagina do produto. Recebe como parametro o produto que será renderizado na pagina do produto
export function carregaProduto(item){
    let insertProduto = document.querySelector(".img_product_container")
    let html = `<div class="product_info_image">
    <img src="${item.imagemProduto}" alt="">
</div>
<div class="product_info">
    <h2>${item.nomeProduto}</h2>
    <span>${item.preco}</span>
    <input type="number" name="" id="quantidade" value="1"> 
    <button>ADD TO CART</button>
    <p> ${item.descricaoProduto}</p>
</div>`
    insertProduto.innerHTML = html
}

// Esta função adiciona um item ao carrinho: recebe 2 parametros : o carrinho de compras e o produto que sera adicionado
export function addCarrinho(listaCompras,item, id){
    let botaoComprar = document.querySelector("button")
    botaoComprar.addEventListener("click", ()=> {

        if(listaCompras.find(item => item.codigoProduto == id)){
            alert("Item já adicionado ao carrinho. ")
            let i = listaCompras.findIndex(item => item.codigoProduto == id)
            listaCompras[i].quantidade += 1
            localStorage.setItem("carrinho",JSON.stringify(listaCompras))
           

        } else{
        let quantidade = parseInt(document.querySelector("#quantidade").value)
        // Nesta linha, capturamos o valor do input quantidade e convertemos para numero, pois recebemos o valor como string
        //item.quantidade = quantidade   opçao 1 - adicionar a propriedade quantidade ao nosso objeto, e depois fazer o push do item na lista de compras
        //listaCompras.push(item)
        listaCompras.push({...item,quantidade}) // opcao 2 - criar um novo objeto com o spread operador, incluindo a propriedade quantidade
        localStorage.setItem("carrinho",JSON.stringify(listaCompras)) // verificar o link https://warcontent.com/localstorage-javascript/#armazenamento-de-objetos-json
        alert("Item adicionado ao carrinho")  

        }

        
          
    })
}


export function valorTotalQuantidade (listaCarrinhoDeCompras){
let soma = 0
let quantidade = 0
listaCarrinhoDeCompras.forEach(
  item => {
    soma += ((item.quantidade * item.preco))
    quantidade += item.quantidade
  }  
)
document.querySelector(".qtd_price_area span:nth-child(2)").innerHTML = `R$ ${soma}`
document.querySelector(".qtd_price_area span:first-child").innerHTML = `${quantidade}`
console.log(soma, quantidade)
}



export function carrinhoCompras (ListaCarrinhoDeCompras,carrinho){
    ListaCarrinhoDeCompras.forEach(item => {
        console.log(item.quantidade * item.preco)
        let html =`<li class="cart_item">
        <img id="cart_img" src="${item.imagemProduto}">
        <p id="name_product_cart">${item.nomeProduto}</p>
        <div class="cart_item_container">
            <input type="number" name="" id="" value="${item.quantidade}">
            <span>R$${item.quantidade * item.preco}</span>
            <i class="bi bi-trash3"></i>
        </div>
       
    </li>`
    carrinho.innerHTML += html  
    });
}

export function deletarItem(listaCarrinhoDeCompras,valorTotalQuantidade){
    let botoesExcluir = document.querySelectorAll(".bi.bi-trash3")
           
        botoesExcluir.forEach( botao =>
        botao.addEventListener("click", (event)=> {
       
        let cartList = document.querySelector('ul')
        let item = event.target.parentElement.parentElement
        cartList.removeChild(item)
        let itemId = item.id
        let index = listaCarrinhoDeCompras.findIndex( item => item.codigoProduto == itemId)
        listaCarrinhoDeCompras.splice(index,1)
        localStorage.setItem("carrinho",JSON.stringify(listaCarrinhoDeCompras))
        valorTotalQuantidade(listaCarrinhoDeCompras)
        //cartIndicator(listaCarrinhoDeCompras)
        }))
}

export function gerarPedido(listaCarrinhoDeCompras,pedidos){
  
    let id = pedidos.length
     if (pedidos == null || pedidos == 0){id = 1}

    let endereco = {
        nome: document.querySelector("input#nome").value,
        logradouro: document.querySelector("input#logradouro").value,
        cidade: document.querySelector("input#cidade").value,
        bairro: document.querySelector("input#bairro").value,
        estado: document.querySelector("input#estado").value,
        CEP: document.querySelector("input#CEP").value,
        telefone: document.querySelector("input#telefone").value,
        email: document.querySelector("input#email").value
         }

    let pedido = {
        id: id,
        itens: listaCarrinhoDeCompras,
        endereco: endereco
    }

    pedidos.push(pedido)
    localStorage.setItem("pedidos",JSON.stringify(pedidos))
    localStorage.removeItem('carrinho')
    localStorage.removeItem('IdProd')
    alert("Compra realizada com sucesso! Obrigada! :)")
    location.reload()

    }

    export function cartIndicator (listaCompras){
        let indicator = document.querySelector(".cart-item-qtd")
    if (listaCompras == null || listaCompras.length == 0){
        indicator.innerHTML = 0 
        indicator.classList.remove('show')
    } else {
        indicator.innerHTML = listaCompras.length
        indicator.classList.add("show")
    }}




// for(let i = 0; i < lista.length; i++){
//     let produto = `<div class="product_card">
//     <a href="produto2.html">
//     <img class="product_image" src=${lista[i].imagemProduto}>
//     <p>preço R$ ${lista[i].preco}
// </a>
// </div>`

// selecao.innerHTML += produto
// }
