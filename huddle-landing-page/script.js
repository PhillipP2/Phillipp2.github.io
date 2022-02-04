const newsletterInput = document.querySelector('.input-group input');
const newsletterError = document.querySelector('.input-group .error');
const newsletterForm = document.querySelector('.newsletter__form');

const isValidEmail = email => {
  return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const handleSubscribeSubmit = event => {
  event.preventDefault();
  const email = newsletterInput.value;
  
  if (!isValidEmail(newsletterInput.value)) {
    newsletterError.classList.add('show');
    return;
  }
  newsletterError.classList.remove('show');

}

newsletterForm.addEventListener('submit', handleSubscribeSubmit);

