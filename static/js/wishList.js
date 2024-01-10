// Função para salvar o objeto JSON no localStorage
function salvarListaDesejosNoLocalStorage(listaDesejos) {
  localStorage.setItem('ListaDesejos', JSON.stringify(listaDesejos));
}

// Função para adicionar um item à Lista de Desejos
function adicionarItemAListaDesejos(item) {
  // Recupera a Lista de Desejos do localStorage ou cria um array vazio se não existir
  var listaDesejos = JSON.parse(localStorage.getItem('ListaDesejos')) || [];

  // Adiciona o item à Lista de Desejos
  listaDesejos.push(item);

  // Salva a Lista de Desejos atualizada no localStorage
  salvarListaDesejosNoLocalStorage(listaDesejos);
}

// Função para adicionar um item à Lista de Desejos e ao corpo da página
function adicionarItemAoCorpo(item, divPai) {
  var divItem = document.createElement('div'); // Criar a div para o item
  divItem.innerHTML = item.conteudo;

  // Adiciona um botão "remover" ao item na div
  var botaoRemover = document.createElement('button');
  botaoRemover.innerHTML = 'Remover';
  botaoRemover.style.marginLeft = '10px';
  botaoRemover.style.background = '#ff0000';
  botaoRemover.style.color = '#fff';
  botaoRemover.style.border = 'none';
  botaoRemover.style.padding = '8px';
  botaoRemover.style.cursor = 'pointer';

  // Adiciona um evento de clique ao botão "remover"
  botaoRemover.addEventListener('click', function() {
    // Remove o item da Lista de Desejos
    removerItemDaListaDesejos(item);

    // Remove a div do item da div pai
    divPai.removeChild(divItem);

    // Se a div pai estiver vazia, remove ela do corpo
    if (divPai.children.length === 0) {
      document.body.removeChild(divPai);
    }
  });

  // Adiciona o botão "remover" ao item na div
  divItem.appendChild(botaoRemover);

  // Adiciona a div do item à div pai
  divPai.appendChild(divItem);
}

// Função para remover um item da Lista de Desejos
function removerItemDaListaDesejos(item) {
  var listaDesejos = JSON.parse(localStorage.getItem('ListaDesejos')) || [];
  var index = listaDesejos.findIndex(function(listaItem) {
    return listaItem.conteudo === item.conteudo;
  });

  if (index !== -1) {
    listaDesejos.splice(index, 1);
    salvarListaDesejosNoLocalStorage(listaDesejos);
  }
}

// Função para adicionar o botão "Adicionar à lista de desejos" aos cards da home
function addButtonWishList() {
  // Selecione todos os elementos com a classe específica
  var divs = document.querySelectorAll('.ui-item__wrapper');

  // Itere sobre os elementos selecionados
  divs.forEach(function(div, index) {
    // Crie um botão para salvar no JSON
    var botaoSalvar = document.createElement('button');

    // Use um caractere de coração como o conteúdo do botão
    botaoSalvar.innerHTML = '❤ Adicionar à lista de desejos';

    // Adicione estilos ao botão
    botaoSalvar.style.color = '#fff'; // Cor do texto
    botaoSalvar.style.border = 'none'; // Sem borda
    botaoSalvar.style.padding = '8px'; // Padding
    botaoSalvar.style.textAlign = 'center'; // Alinhamento do texto
    botaoSalvar.style.textDecoration = 'none'; // Sem decoração de texto
    botaoSalvar.style.display = 'inline-block'; // Display
    botaoSalvar.style.fontSize = '16px'; // Tamanho da fonte
    botaoSalvar.style.cursor = 'pointer'; // Cursor
    botaoSalvar.style.height = '5px'; // Altura
    botaoSalvar.style.zIndex = '999999'; // Z-index
    botaoSalvar.style.position = 'absolute'; // Posição
    botaoSalvar.style.bottom = '0px'; // Posição inferior
    botaoSalvar.style.display = 'flex';
    botaoSalvar.style.justifyContent = 'center';
    botaoSalvar.style.alignItems = 'center';
    botaoSalvar.style.width = '13.5rem';
    botaoSalvar.style.background = '#717171';

    // Adicione um evento de clique ao botão de salvar
    botaoSalvar.addEventListener('click', function() {
      // Clone a div
      var divClone = div.cloneNode(true);

      // Adiciona o clone à Lista de Desejos
      adicionarItemAListaDesejos({ index: index, conteudo: divClone.outerHTML });

      // Adiciona o clone ao corpo da página
      adicionarItemAoCorpo({ index: index, conteudo: divClone.outerHTML }, divPai);
    });

    // Altera a cor do coração para vermelho quando o mouse passa sobre ele
    botaoSalvar.addEventListener('mouseover', function() {
      botaoSalvar.style.color = 'red';
    });

    // Altera a cor do coração de volta para branco quando o mouse sai
    botaoSalvar.addEventListener('mouseout', function() {
      botaoSalvar.style.color = 'white';
    });

    // Adicione o botão abaixo da div
    div.insertAdjacentElement('afterend', botaoSalvar);
  });
}

// Função para aplicar estilos adicionais
function adicionalStyles() {
  // Seleciona todos os elementos SVG com a classe 'ui-item__shipping-icon'
  var svgElements = document.querySelectorAll('svg.ui-item__shipping-icon');

  // Itera sobre os elementos e aplica os estilos
  svgElements.forEach(function(svgElement) {
    // Define o atributo 'width' para 14
    svgElement.setAttribute('width', '14');
  });

  // Seleciona a div com a classe '.wishlist-container'
  var wishlistContainer = document.querySelector('.wishlist-container');

  // Verifica se a div foi encontrada antes de aplicar estilos
  if (wishlistContainer) {
    wishlistContainer.style.display = 'flex';
    wishlistContainer.style.gap = '30px';
    wishlistContainer.style.alignItems = 'center';
    wishlistContainer.style.justifyContent = 'center';
    wishlistContainer.style.maxWidth = '1200px';
    wishlistContainer.style.margin = '0 auto';
  }
}

// Função principal de inicialização
function onInit() {
  addButtonWishList();
  adicionalStyles();

  // Verifica se estamos na página de "wishlist"
  if (window.location.pathname.includes('wishlist')) {
    // Se estiver, remova o botão "Comprar"
    removerBotaoComprar();
  }
}

// Função para remover o botão "Comprar"
function removerBotaoComprar() {
  // Selecione todos os botões com a classe específica
  var botoesComprar = document.querySelectorAll('.botao-comprar');

  // Itere sobre os botões selecionados e remova-os
  botoesComprar.forEach(function(botao) {
    botao.parentNode.removeChild(botao);
  });
}

// Adiciona um atraso para garantir que a página tenha carregado completamente
setTimeout(onInit, 300);