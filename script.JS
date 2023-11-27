//  adicionar  título
document.body.innerHTML = '<h1 id="titulo">Compra Certa</h1>';

// adicionar um produto à venda
const produtoContainer = document.createElement('div');
produtoContainer.id = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Perfume Feminino';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Floratta Red Colônia Feminino.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 119,90';

const imagemProduto = document.createElement('img');
imagemProduto.src = './perfume.jpeg';
imagemProduto.alt = 'Imagem do Produto';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);
produtoContainer.appendChild(imagemProduto);
document.body.appendChild(produtoContainer);