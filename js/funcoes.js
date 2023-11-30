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
    <svg width="30" height="30" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9509 37.7623C20.7211 37.7636 20.4933 37.7196 20.2806 37.6327C20.0679 37.5458 19.8744 37.4178 19.7113 37.256L6.14561 23.6729C4.44398 21.9535 3.4895 19.6321 3.4895 17.213C3.4895 14.7939 4.44398 12.4726 6.14561 10.7532C7.86054 9.04308 10.1836 8.08276 12.6055 8.08276C15.0273 8.08276 17.3504 9.04308 19.0653 10.7532L20.9509 12.6387L22.8364 10.7532C24.5514 9.04308 26.8744 8.08276 29.2963 8.08276C31.7182 8.08276 34.0412 9.04308 35.7561 10.7532C37.4578 12.4726 38.4122 14.7939 38.4122 17.213C38.4122 19.6321 37.4578 21.9535 35.7561 23.6729L22.1905 37.256C22.0273 37.4178 21.8339 37.5458 21.6211 37.6327C21.4084 37.7196 21.1806 37.7636 20.9509 37.7623ZM12.6055 11.5737C11.8664 11.5704 11.134 11.7137 10.4507 11.9954C9.76738 12.2772 9.14677 12.6916 8.62479 13.2149C7.57037 14.2749 6.97847 15.7092 6.97847 17.2043C6.97847 18.6994 7.57037 20.1337 8.62479 21.1937L20.9509 33.5372L33.277 21.1937C34.3314 20.1337 34.9233 18.6994 34.9233 17.2043C34.9233 15.7092 34.3314 14.2749 33.277 13.2149C32.2009 12.1983 30.7766 11.6319 29.2963 11.6319C27.8159 11.6319 26.3917 12.1983 25.3156 13.2149L22.1905 16.3575C22.0282 16.5212 21.8351 16.6511 21.6223 16.7397C21.4096 16.8283 21.1814 16.874 20.9509 16.874C20.7204 16.874 20.4922 16.8283 20.2794 16.7397C20.0667 16.6511 19.8736 16.5212 19.7113 16.3575L16.5861 13.2149C16.0641 12.6916 15.4435 12.2772 14.7602 11.9954C14.0769 11.7137 13.3445 11.5704 12.6055 11.5737Z" fill="#A5597D"/>
                </svg>
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
