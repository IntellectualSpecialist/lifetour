const alertMessages = {
  empty: 'Заполните поле.',
  phone: 'Допустимы только цифры, пробелы и символы: "+-()".',
  email: 'Email должен быть в формате "example@domen.ru".'
};
const formElement = document.querySelector('.form form');
let phoneInputElement;
let emailInputElement;
let phoneFieldElement;
let emailFieldElement;
let fieldElements;

if (formElement) {
  phoneInputElement = formElement.querySelector('#phone');
  emailInputElement = formElement.querySelector('#email');
  phoneFieldElement = phoneInputElement.closest('.field');
  emailFieldElement = emailInputElement.closest('.field');
  fieldElements = formElement.querySelectorAll('.field');
}

const isValidEmail = (email) => {
  const pattern = /^[a-zA-Zа-яёА-ЯЁ0-9._%+-]+@[a-zA-Zа-яёА-ЯЁ0-9.-]+\.(?:[рР][фФ]|[a-zA-Z0-9-]{2,})$/;
  return pattern.test(email);
};

const isValidPhone = (phone) => {
  const pattern = /^\+?[0-9\s()-]{0,18}[0-9]{1,11}$/;
  return pattern.test(phone);
};

const removeNoJsClass = () => {
  fieldElements.forEach((field) => {
    field.classList.remove('field--no-js');
  });
};

const cleanFields = () => {
  if (phoneFieldElement.classList.contains('field--error')) {
    phoneFieldElement.classList.remove('field--error');
  }

  if (emailFieldElement.classList.contains('field--error')) {
    emailFieldElement.classList.remove('field--error');
  }

  formElement.reset();
};

const setNovalidateAttribute = () => {
  formElement.setAttribute('novalidate', 'true');
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const phone = phoneInputElement.value;
  const email = emailInputElement.value;

  if (!phone || !email) {
    if (!phone) {
      phoneInputElement.setCustomValidity(alertMessages.empty);
      phoneFieldElement.classList.add('field--error');
      phoneInputElement.reportValidity();

      return;
    } else {
      phoneInputElement.setCustomValidity('');
    }

    if (!email) {
      emailInputElement.setCustomValidity(alertMessages.empty);
      emailFieldElement.classList.add('field--error');
      emailInputElement.reportValidity();

      return;
    } else {
      emailInputElement.setCustomValidity('');
    }
  }

  if (!isValidPhone(phone)) {
    phoneInputElement.setCustomValidity(alertMessages.phone);
    phoneFieldElement.classList.add('field--error');
    phoneInputElement.reportValidity();

    return;
  } else {
    phoneInputElement.setCustomValidity('');
  }

  if (!isValidEmail(email)) {
    emailInputElement.setCustomValidity(alertMessages.email);
    emailFieldElement.classList.add('field--error');
    emailInputElement.reportValidity();

    return;
  } else {
    emailInputElement.setCustomValidity('');
  }

  formElement.submit();
  cleanFields();
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

const onFieldsInput = (evt) => {
  if (evt.target.matches('input')) {
    if (evt.target.value) {
      const currentField = evt.target.closest('.field');

      if (currentField.classList.contains('field--error')) {
        currentField.classList.remove('field--error');
      }
    }
  }
};

const registerFormEvents = () => {
  formElement.addEventListener('submit', onFormSubmit);
  formElement.addEventListener('change', onFieldsChange);
  formElement.addEventListener('input', onFieldsInput);
};

const initFormValidate = () => {
  if (formElement) {
    removeNoJsClass();
    setNovalidateAttribute();
    cleanFields();
    registerFormEvents();
  }
};

export { initFormValidate };
