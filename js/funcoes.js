// // Esta funcao carrega todos os produtos nas paginas HOME e PRODUTOS.Ela recebe 2 parametros: A lista dos produtos que será renderizada, e o local onde o HTML será injetado

// export function carregaProdutos (lista, gridProduto){
//     lista.forEach(item => {
//     let html = `<div class="product_card" id=${item.codigoProduto}>
//                     <a href="./produto.html">
//                         <img class="product_image" src=${item.imagemProduto} id=${item.codigoProduto} >
//                     </a>
//                     <p>preço R$ ${item.preco}
//                 </div>`
//     gridProduto.innerHTML += html
        
        
//     });
// }

// // Esta funcao adiciona o evento click nos cards de produtos. Ela captura o id do elemento e salva no local storage.
// export function handleClick(){
//     let cardProdtuos = document.querySelectorAll(".product_card")
//         cardProdtuos.forEach(card => card.addEventListener('click', (e) => {
//     let idProd = e.target.id
//         localStorage.setItem("IdProd",idProd)
//     }))

// }

// // Esta funcao localiza um item em uma lista de items: recebe 2 paramentos: A lista de itens, como o catalogo de produtos, e o ID(codigo do produto) que deverá ser encontrado.
// export function findItem(items, Id){
//     let item = items.find(produto => produto.codigoProduto == Id)
//     return item
// }

// // Esta funcao carrega o produto encontrado pela funcao findItem na pagina do produto. Recebe como parametro o produto que será renderizado na pagina do produto
// export function carregaProduto(item){
//     let insertProduto = document.querySelector("section.product_detail_container")
//     let html = `<div class="img_product_container">
//                     <div class="product_info_image">
//                         <img src="${item.imagemProduto}" alt="">
//                     </div>
//                     <div class="product_info">
//                         <h2>${item.nomeProduto}</h2>
//                         <span>${item.preco}</span>
//                         <input type="number" name="" id="" value="1">
//                         <button>Comprar</button>
//                         <p>${item.descricaoProduto}</p>
//                     </div>
//                 </div>`
//     insertProduto.innerHTML = html
// }

// export function addCarrinho(listaCompras,item, id){
//     let botaoComprar = document.querySelector("button")
//     botaoComprar.addEventListener("click", ()=> {
        
//         if(listaCompras.find(item => item.codigoProduto == id)){
//             alert("Item já adicionado ao carrinho. ")
//             let i = listaCompras.findIndex(item => item.codigoProduto == id)
//             listaCompras[i].quantidade += 1
//             localStorage.setItem("carrinho",JSON.stringify(listaCompras))
           

//         } else{
//         let quantidade = parseInt(document.querySelector("#quantidade").value)
//         // Nesta linha, capturamos o valor do input quantidade e convertemos para numero, pois recebemos o valor como string
//         //item.quantidade = quantidade   opçao 1 - adicionar a propriedade quantidade ao nosso objeto, e depois fazer o push do item na lista de compras
//         //listaCompras.push(item)
//         listaCompras.push({...item,quantidade}) // opcao 2 - criar um novo objeto com o spread operador, incluindo a propriedade quantidade
//         localStorage.setItem("carrinho",JSON.stringify(listaCompras)) // verificar o link https://warcontent.com/localstorage-javascript/#armazenamento-de-objetos-json
//         alert("item adicionado ao carrinho")  

//         }

        
          
//     })
// }

// // for(let i = 0; i < lista.length; i++){
// //     let produto = `<div class="product_card">
// //     <a href="produto2.html">
// //     <img class="product_image" src=${lista[i].imagemProduto}>
// //     <p>preço R$ ${lista[i].preco}
// // </a>
// // </div>`

// // selecao.innerHTML += produto
// // }