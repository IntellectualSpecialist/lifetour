const formElement = document.querySelector('.form form');
let phoneInputElement;
let emailInputElement;
let phoneFieldElement;
let emailFieldElement;

if (formElement) {
  phoneInputElement = formElement.querySelector('#phone');
  emailInputElement = formElement.querySelector('#email');
  phoneFieldElement = phoneInputElement.closest('.field');
  emailFieldElement = emailInputElement.closest('.field');
}

const isValidPhone = (phone) => {
  const pattern = /^\+7(\s\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}|[0-9]{10})$/;
  return pattern.test(phone);
};

const isValidEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(рф|xn--p1ai|[a-zA-Zа-яёА-ЯЁ]{2,})$/;
  return pattern.test(email);
};

const cleanFields = () => {
  const phone = phoneInputElement.value;
  const email = emailInputElement.value;

  if (phone) {
    phoneInputElement.value = '';
  }

  if (email) {
    emailInputElement.value = '';
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const phone = phoneInputElement.value;
  const email = emailInputElement.value;

  if (phoneFieldElement.classList.contains('field--error')) {
    phoneFieldElement.classList.remove('field--error');
  }

  if (emailFieldElement.classList.contains('field--error')) {
    emailFieldElement.classList.remove('field--error');
  }

  if (!phone || !email) {
    if (!email) {
      emailFieldElement.classList.add('field--error');
    }

    if (!phone) {
      phoneFieldElement.classList.add('field--error');
    }

    return;
  }

  if (!isValidPhone(phone)) {
    phoneFieldElement.classList.add('field--error');

    return;
  }

  if (!isValidEmail(email)) {
    emailFieldElement.classList.add('field--error');

    return;
  }

  formElement.submit();
};

const onFieldsChange = (evt) => {
  if (evt.target.matches('input')) {
    if (evt.target.value) {
      const currentField = evt.target.closest('.field');
      const label = currentField.querySelector('.field__label');

      label.style.display = 'none';
    }
  }
};

const registerFormEvents = () => {
  formElement.addEventListener('submit', onFormSubmit);
  formElement.addEventListener('change', onFieldsChange);
};

const initFormValidate = () => {
  if (formElement) {
    cleanFields();
    registerFormEvents();
  }
};

export { initFormValidate };
