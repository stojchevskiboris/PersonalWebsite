(function () {
  'use strict';

  var form = document.getElementById('contactForm');
  var submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var emailField = document.getElementById('from_name');
    if (!emailField.value.trim()) {
      emailField.classList.add('error');
      showToast('Please provide your email address.', true);
      return;
    }
    emailField.classList.remove('error');

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    emailjs.sendForm('default_service', 'template_jerv0j5', form)
      .then(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        showToast('Message sent successfully! I\'ll get back to you soon.');
        form.reset();
      }, function (err) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        showToast('Failed to send message. Please try again.', true);
        console.error('EmailJS error:', err);
      });
  });

  document.getElementById('from_name').addEventListener('input', function () {
    this.classList.remove('error');
  });
})();
