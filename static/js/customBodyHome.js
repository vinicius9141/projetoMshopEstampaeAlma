console.log('body custom');

function customizeTitle(){

var elementosH2 = document.querySelectorAll('.section-header__title--base');

elementosH2.forEach(function (elemento) {
    elemento.style.background = '#9b9999';
    elemento.style.padding = '0.34rem';
    elemento.style.borderRadius = '0.5rem';
    elemento.style.color = '#fff'
});

var elementViewMore = document.querySelectorAll('a#view-more')

elementViewMore.forEach(function (el){
    el.style.background = '#333';
    el.style.padding = '0.7rem';
    el.style.borderRadius = '0.5rem'; 
})

}


function addButButtonInProductCard() {
    // Selecione todos os elementos com a classe ".ui-item"
    var elementosUiItem = document.querySelectorAll('.ui-item');
  
    // Itere sobre os elementos e adicione eventos de hover
    elementosUiItem.forEach(function (elemento) {
      // Cria o botão "Comprar"
      var botaoComprar = document.createElement('button');
      botaoComprar.textContent = 'Comprar';
      botaoComprar.classList.add('botao-comprar'); // Adiciona uma classe ao botão para estilizar
  
      // Adiciona estilos ao botão "Comprar"
      botaoComprar.style.background = 'coral';
      botaoComprar.style.border = 'none';
      botaoComprar.style.padding = '1rem';
      botaoComprar.style.borderRadius = '0.7rem';
      botaoComprar.style.fontSize = '12pt';
      botaoComprar.style.fontWeight = '700';
      botaoComprar.style.textTransform = 'uppercase';
      botaoComprar.style.color = '#fff';
      botaoComprar.style.position = 'absolute';
      botaoComprar.style.top = '50%';
      botaoComprar.style.width = '100%';
      botaoComprar.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
      botaoComprar.style.cursor = 'pointer';
      botaoComprar.style.opacity = '0'; // Inicialmente, define a opacidade como 0
  
      // Cria o layer preto transparente
      var layer = document.createElement('div');
      layer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      layer.style.position = 'absolute';
      layer.style.top = '0';
      layer.style.left = '0';
      layer.style.width = '100%';
      layer.style.height = '100%';
      layer.style.display = 'none'; // Inicialmente, define o display como none
  
      // Adiciona o botão "Comprar" e o layer ao elemento pai
      elemento.appendChild(layer);
      elemento.appendChild(botaoComprar);
  
      // Adiciona evento de hover
      elemento.addEventListener('mouseover', function () {
        // Aplica animação de fade-in ao botão "Comprar" e exibe o layer no hover
        botaoComprar.style.transition = 'opacity 0.3s ease-in-out';
        botaoComprar.style.opacity = '1';
        layer.style.display = 'block';
      });
  
      // Adiciona evento para resetar a opacidade e ocultar o layer no mouseout
      elemento.addEventListener('mouseout', function () {
        // Reseta a opacidade do botão "Comprar" e oculta o layer
        botaoComprar.style.opacity = '0';
        layer.style.display = 'none';
      });
    });
  }

function changeColorTabs(){
    // Selecione todos os elementos com a classe 'li.tabs-list__item'
var elementosTabsList = document.querySelectorAll('li.tabs-list__item');

// Itere sobre os elementos e aplique os estilos a cada um
elementosTabsList.forEach(function (elemento) {
    // Aplica os estilos ao elemento
    elemento.style.background = 'lightgreen';
    elemento.style.padding = '0.4rem';
    elemento.style.borderRadius = '0.5rem';
    elemento.style.marginRight = '10px'
});

// Selecione o elemento com a classe 'li.tabs-list__item.tabs-list__item--active'
var elementoAtivo = document.querySelector('li.tabs-list__item.tabs-list__item--active');

// Verifique se o elemento existe antes de aplicar estilos
if (elementoAtivo) {
    // Aplica os estilos ao elemento ativo
    elementoAtivo.style.background = 'green';
    elementoAtivo.style.padding = '0.4rem';
    elementoAtivo.style.borderRadius = '0.5rem';
    elementoAtivo.style.marginLeft = '10px'
}
}

function costomizePaymentCards(){
    // Selecione todos os elementos com a classe 'payment-data-subtitle'
var elementosSubtitle = document.querySelectorAll('.payment-data-subtitle');

// Itere sobre os elementos e remova aqueles que contêm o texto "Ver todos" ou "Ver mais"
elementosSubtitle.forEach(function (elemento) {
    var texto = elemento.textContent.trim();

    if (texto === 'Ver todos' || texto === 'Ver mais') {
        elemento.parentNode.removeChild(elemento);
    }
});

// Selecione todos os elementos 'a.payment-data-icon img'
var elementosPaymentDataIcon = document.querySelectorAll('a.payment-data-icon img');

// Itere sobre os elementos e aplique o estilo filter: invert(1);
elementosPaymentDataIcon.forEach(function (elemento) {
    elemento.style.filter = 'invert(1)';
});
}

function costomizeInfoShop(){
    // Selecione o elemento 'section.site-shopping-info'
var elementoSiteShoppingInfo = document.querySelector('section.site-shopping-info');

// Verifique se o elemento existe antes de aplicar estilos
if (elementoSiteShoppingInfo) {
    // Aplica o estilo background: lightblue;
    elementoSiteShoppingInfo.style.background = 'lightblue';
}
}

setTimeout(initBody, 300);

function initBody(){
    customizeTitle()
    addButButtonInProductCard()
    changeColorTabs()
    costomizePaymentCards()
    costomizeInfoShop()
}