document.addEventListener('DOMContentLoaded', function() {
    var hideLink = document.getElementById('hide1');
    var showLink = document.getElementById('show1');
    var weiterlesen = document.getElementById('weiterlesen');
    var expanded = false;
  
    hideLink.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      if (!expanded) {
        showLink.style.display = 'block';
        weiterlesen.style.display = 'none';
        expanded = true;
      } else {
        showLink.style.display = 'none';
        weiterlesen.style.display = 'inline';
        expanded = false;
      }
    });
  
    showLink.addEventListener('click', function(event) {
      event.preventDefault();
  
      showLink.style.display = 'none';
      weiterlesen.style.display = 'inline';
      expanded = false;
    });
  
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');
    var newsletterButton = document.getElementById('newsletterButton');
    var isSubscribed = false;
  
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
  
    newsletterButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      if (isSubscribed) {
        newsletterButton.textContent = 'Newsletter abonnieren';
        newsletterButton.style.backgroundColor = '#FC5E4D';
        isSubscribed = false;
      } else {
        newsletterButton.textContent = 'Abonniert';
        isSubscribed = true;
      }
    });
  
    emailInput.addEventListener('blur', function() {
      if (emailInput.value === '') {
        newsletterButton.disabled = true;
        newsletterButton.style.backgroundColor = '#FC5E4D';
      }
    });
  
    emailError.style.display = 'none';
    newsletterButton.disabled = true;
  });
  