const error = document.getElementById('error');
const submit = document.getElementById('submit-btn');
error.style.color = 'red';
error.style.textAlign = 'center';
error.style.fontSize = '16px';
const emailValidation = function () {
  const email = document.getElementById('email').value;

  if (email.toLowerCase() !== email) {
    error.innerHTML = 'lowercase required';
  }
  return false;
};

submit.addEventListener('click', (event) => {
  if (!emailValidation()) {
    event.preventDefault();
  }
});

submit.addEventListener('click', emailValidation);