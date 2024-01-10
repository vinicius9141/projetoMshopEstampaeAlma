// Itens do menu em formato JSON
var menuItens = {
  "menuItens": [
    {
      "id": 1,
      "titulo": "Categoria Pai 1",
      "link": "/categoria-pai-1",
      "categoriasFilho": [
        {
          "id": 11,
          "titulo": "Categoria Filho 1",
          "link": "/categoria-filho-1",
          "categoriasNeto": [
            {
              "id": 111,
              "titulo": "Categoria Neto 1",
              "link": "/categoria-neto-1"
            },
            {
              "id": 112,
              "titulo": "Categoria Neto 2",
              "link": "/categoria-neto-2"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Categoria Pai 2",
      "link": "/categoria-pai-2",
      "categoriasFilho": [
        {
          "id": 21,
          "titulo": "Categoria Filho 3",
          "link": "/categoria-filho-3",
          "categoriasNeto": [
            {
              "id": 211,
              "titulo": "Categoria Neto 3",
              "link": "/categoria-neto-3"
            },
            {
              "id": 212,
              "titulo": "Categoria Neto 4",
              "link": "/categoria-neto-4"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Lista de Desejos",
      "link": "/wishlist",
    },
  ]
};

// Função para criar os links recursivamente
function criarMenu(menuItens, elementoPai) {
  menuItens.forEach(function (item) {
    var link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.titulo;

    // Adiciona estilos aos links
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
    link.style.padding = '10px';
    link.style.display = 'inline-block'; // Alterado para inline-block
    link.style.position = 'relative';

    // Se o item tiver categoriasFilho, chame a função recursivamente
    if (item.categoriasFilho && item.categoriasFilho.length > 0) {
      var subMenu = document.createElement('div');
      subMenu.className = 'submenu';
      criarMenu(item.categoriasFilho, subMenu);
      link.appendChild(subMenu);

      // Adiciona estilos específicos para os submenus
      subMenu.style.display = 'none';  // Oculta os submenus por padrão
      subMenu.style.position = 'absolute';
      subMenu.style.top = '100%'; // Alterado para exibir abaixo do pai
      subMenu.style.left = '0';
      subMenu.style.background = 'red'; // Adiciona o fundo vermelho

      // Adiciona eventos de hover para exibir o submenu ao lado
      link.addEventListener('mouseover', function () {
        subMenu.style.display = 'block';
      });

      subMenu.addEventListener('mouseover', function () {
        subMenu.style.display = 'block';
      });

      link.addEventListener('mouseout', function () {
        subMenu.style.display = 'none';
      });

      subMenu.addEventListener('mouseout', function () {
        subMenu.style.display = 'none';
      });
    }

    // Se o item tiver categoriasNeto, chame a função recursivamente
    if (item.categoriasNeto && item.categoriasNeto.length > 0) {
      var subSubMenu = document.createElement('div');
      subSubMenu.className = 'subsubmenu';
      criarMenu(item.categoriasNeto, subSubMenu);
      link.appendChild(subSubMenu);

      // Adiciona estilos específicos para os submenus
      subSubMenu.style.display = 'none';  // Oculta os submenus por padrão
      subSubMenu.style.position = 'absolute';
      subSubMenu.style.top = '0';
      subSubMenu.style.left = '100%';

      // Adiciona eventos de hover para exibir o subsubmenu ao lado
      link.addEventListener('mouseover', function () {
        subSubMenu.style.display = 'block';
      });

      subSubMenu.addEventListener('mouseover', function () {
        subSubMenu.style.display = 'block';
      });

      link.addEventListener('mouseout', function () {
        subSubMenu.style.display = 'none';
      });

      subSubMenu.addEventListener('mouseout', function () {
        subSubMenu.style.display = 'none';
      });
    }

    // Adiciona o link ao elemento pai
    elementoPai.appendChild(link);
  });
}

// Função para criar o ícone do hamburguer
function criarHamburguerIcon() {
  var hamburguerIcon = document.createElement('div');
  hamburguerIcon.id = 'hamburguer-icon';
  hamburguerIcon.style.width = '30px';
  hamburguerIcon.style.height = '30px';
  hamburguerIcon.style.background = '#a100a191 url("https://i.postimg.cc/6p2LzP3x/hamburger.png") no-repeat center';
  hamburguerIcon.style.backgroundSize = '20px 20px';
  hamburguerIcon.style.cursor = 'pointer';

  // Adiciona o evento de clique para mostrar/ocultar o menu
  hamburguerIcon.addEventListener('click', function () {
    var menuContainer = document.querySelector('.menu-container');
    if (menuContainer.style.display === 'block') {
      menuContainer.style.display = 'none';
    } else {
      menuContainer.style.display = 'block';
    }
  });

  return hamburguerIcon;
}

// Selecione a tag 'header' existente
var headerExistente = document.querySelector('header');

// Verifique se o headerExistente realmente existe antes de tentar removê-lo
if (headerExistente) {
  // Crie uma nova tag 'header'
  var novoHeader = document.createElement('header');

  // Adiciona estilos CSS para transformar em um dropdown
  novoHeader.style.display = 'flex';
  novoHeader.style.flexDirection = 'row'; // Alterado para linha para posicionar a logo ao lado do menu
  novoHeader.style.alignItems = 'center'; // Adiciona alinhamento vertical ao centro
  novoHeader.style.position = 'relative';
  novoHeader.style.backgroundColor = '#333'; // Adiciona o background

  // Adiciona a logo apenas se for desktop
  if (window.innerWidth >= 768) {
    var logo = document.createElement('img');
    logo.src = 'https://i.postimg.cc/5N94MddL/Logotipo-de-loja-de-roupa-moderno-preto-e-branco.jpg'; // Substitua pelo caminho real da sua logo
    logo.alt = 'Logo da Sua Empresa'; // Adicione um texto alternativo para acessibilidade
    logo.style.width = '100px'; // Ajuste a largura conforme necessário
    logo.style.marginRight = '20px'; // Adiciona margem à direita para espaçamento
    novoHeader.appendChild(logo);
  }

  // Adiciona o ícone do hamburguer para dispositivos mobile
  if (window.innerWidth < 768) {
    // Adiciona estilos CSS para transformar em um dropdown
    novoHeader.style.display = 'flex';
    novoHeader.style.flexDirection = 'column'; // Alterado para coluna para empilhar elementos
    novoHeader.style.backgroundColor = '#333'; // Adiciona o background

    // Adiciona o ícone do hamburguer
    novoHeader.appendChild(criarHamburguerIcon());

    // Cria o container para o menu
    var menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    menuContainer.style.display = 'none'; // Inicialmente oculto
    menuContainer.style.background = '#333'; // Adiciona o background

    // Chame a função para criar os links a partir do objeto JSON
    criarMenu(menuItens.menuItens, menuContainer);

    // Adiciona estilos específicos para os submenus
    var submenus = document.querySelectorAll('.submenu, .subsubmenu');
    submenus.forEach(function (submenu) {
      // Restante do código para estilizar submenus
      // ...
    });

    // Adiciona o container do menu ao novoHeader
    novoHeader.appendChild(menuContainer);
  } else {
    // Se for desktop, mantenha os estilos existentes
    novoHeader.style.display = 'flex';
    novoHeader.style.justifyContent = 'center'
    novoHeader.style.gap = '2rem'
    novoHeader.style.flexDirection = 'row';
    novoHeader.style.alignItems = 'center';
    novoHeader.style.position = 'relative';
    novoHeader.style.backgroundColor = '#333';

    // Chame a função para criar os links a partir do objeto JSON
    criarMenu(menuItens.menuItens, novoHeader);

    // Adiciona estilos específicos para os submenus
    var submenus = document.querySelectorAll('.submenu, .subsubmenu');
    submenus.forEach(function (submenu) {
      // Restante do código para estilizar submenus
      // ...
    });
  }

  // Adiciona o formulário de pesquisa original
  var searchFormOriginal = document.querySelector('.nav-search-form');
  searchFormOriginal.style.display = 'flex';
  searchFormOriginal.style.justifyContent = 'center';

  // Adiciona o formulário de pesquisa original ao novoHeader
  novoHeader.appendChild(searchFormOriginal);

  // Substitui o headerExistente pelo novoHeader
  headerExistente.parentNode.replaceChild(novoHeader, headerExistente);
}
