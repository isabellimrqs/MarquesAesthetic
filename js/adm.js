let data = JSON.parse(localStorage.getItem("pedidos"));
const resultadoDiv = document.getElementById('resultado');

data.forEach(pedido => {
    resultadoDiv.innerHTML += `<h2 class="title_cart">Order ${pedido.id}:</h2>`;
    resultadoDiv.innerHTML += `<h3 class="title_price">Client ${pedido.endereco.nome}</h3>`;
    resultadoDiv.innerHTML += '<ul>';

    pedido.itens.forEach(item => {
        resultadoDiv.innerHTML += '<hr>';
        resultadoDiv.innerHTML += `<li class="dados_admin">Title: ${item.nomeProduto}</li>`;
        resultadoDiv.innerHTML += `<li class="dados_admin">Quantity: ${item.quantidade}</li>`;
        resultadoDiv.innerHTML += `<li class="dados_admin">Price: $${item.preco.toFixed(2)}</li>`;
        resultadoDiv.innerHTML += '<hr>';
    });

    resultadoDiv.innerHTML += '</ul>';
});