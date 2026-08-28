const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
form.addEventListener('input', formListener);
function formListener(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData !== null) {
  const parse = JSON.parse(savedData);
  const { email, message } = parse;
  formData.email = email;
  formData.message = message;
  form.elements.email.value = email ?? '';
  form.elements.message.value = message ?? '';
}
form.addEventListener('submit', formSubmit);
function formSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
}
