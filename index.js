let beverageCount = 1;

document.querySelector('.add-button').addEventListener('click', () => {
  beverageCount++;
  
  const forms = document.querySelectorAll('.beverage');
  const lastForm = forms[forms.length - 1];
  const newForm = lastForm.cloneNode(true);
  
  newForm.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
  
  const radioButtons = newForm.querySelectorAll('input[type="radio"]');
  for (const radio of radioButtons) {
    radio.name = `milk${beverageCount}`;
  }
  
  lastForm.after(newForm);
});
