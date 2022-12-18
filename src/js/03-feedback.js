import throttle from 'lodash.throttle';

const FormRefs = document.querySelector('.feedback-form');
const inputRefs = document.querySelector('[name="email"]');
const textareaRefs = document.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
let allData = {};

contantInput();

FormRefs.addEventListener('input', throttle(onTextareaInput, 500));
FormRefs.addEventListener('submit', onFormSubmit);

function onTextareaInput(e) {
  allData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return;
  }
  console.log(allData);
  e.currentTarget.reset();
  removeInputValues();
}
function removeInputValues() {
  allData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
}

function contantInput() {
  const inputValue = localStorage.getItem(STORAGE_KEY);
  if (inputValue) {
    allData = JSON.parse(inputValue);
    inputRefs.value = allData.email;
    textareaRefs.value = allData.message;
  }
}
