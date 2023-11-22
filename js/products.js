import { ListadeProdutos } from "./dados.js"; // importa o catalogo de produtos
import { carregaProdutos, handleClick } from "./funcoes.js"; // importa as funcoes que serao executadas na pagina PRODUTOS / CATALOGO

let container = document.querySelector(".products_grid") // Seleção do local onde o codigo HTML sera injetado

carregaProdutos(ListadeProdutos,container); // função recebe uma lista de produtos, que será exibida nas paginas
handleClick() // adiciona o click nos cards de produto;