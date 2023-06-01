document.addEventListener('DOMContentLoaded', function() {
    var hideLink = document.getElementById('hide1');
    var showLink = document.getElementById('show1');
    var weiterlesen = document.getElementById('weiterlesen');
    var newsletterButton = document.getElementById('newsletterButton');
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');
    var clicked = false;
  
    hideLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (!clicked) {
        showLink.style.display = 'block';
        weiterlesen.style.display = 'none';
        clicked = true;
        newsletterButton.innerHTML = 'Abonniert';
      } else {
        showLink.style.display = 'none';
        weiterlesen.style.display = 'inline';
        clicked = false;
        newsletterButton.innerHTML = 'Newsletter abonnieren';
      }
    });
  
    showLink.addEventListener('click', function(event) {
      event.preventDefault();
      showLink.style.display = 'none';
      weiterlesen.style.display = 'inline';
      clicked = false;
      newsletterButton.innerHTML = 'Newsletter abonnieren';
    });
  
    emailInput.addEventListener('input', function() {
      if (!emailInput.validity.valid) {
        emailError.style.display = 'block';
        newsletterButton.disabled = true;
        newsletterButton.style.backgroundColor = '#FC5E4D';
      } else {
        emailError.style.display = 'none';
        newsletterButton.disabled = false;
        newsletterButton.style.backgroundColor = '#26EA8F';
      }
    });
  
    emailInput.addEventListener('blur', function() {
      if (!emailInput.validity.valid) {
        emailError.style.display = 'none';
        newsletterButton.disabled = true;
        newsletterButton.style.backgroundColor = '#FC5E4D';
      }
    });
  
    emailError.style.display = 'none';
    newsletterButton.disabled = true;
  });
  