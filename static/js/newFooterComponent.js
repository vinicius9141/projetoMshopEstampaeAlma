// Selecione o elemento <footer> existente
var existingFooter = document.querySelector('footer');

// Verifique se o elemento existe antes de prosseguir
if (existingFooter) {
  // Limpe o conteúdo existente
  existingFooter.innerHTML = '';

  // Crie os elementos como no exemplo anterior
  var termsLink = document.createElement('a');
  termsLink.href = '/terms-of-service';
  termsLink.textContent = 'Termos de Serviço';
  termsLink.style.color = '#fff';
  termsLink.style.marginRight = '20px';

  var privacyLink = document.createElement('a');
  privacyLink.href = '/privacy-policy';
  privacyLink.textContent = 'Política de Privacidade';
  privacyLink.style.color = '#fff';
  privacyLink.style.marginRight = '20px';

  var contactInfo = document.createElement('p');
  contactInfo.textContent = 'Entre em contato: contato@seusite.com';

  // Adicione os elementos ao <footer>
  existingFooter.appendChild(termsLink);
  existingFooter.appendChild(privacyLink);
  existingFooter.appendChild(contactInfo);
}
