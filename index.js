let beverageCount = 1;

function updateRemoveButtons() {
  const forms = document.querySelectorAll('.beverage');
  const removeButtons = document.querySelectorAll('.remove-button');
  
  removeButtons.forEach(btn => {
    btn.disabled = forms.length === 1;
  });
}

function updateBeverageNumbers() {
  const forms = document.querySelectorAll('.beverage');
  forms.forEach((form, index) => {
    form.querySelector('.beverage-count').textContent = `Напиток №${index + 1}`;
  });
}

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
  updateRemoveButtons();
  updateBeverageNumbers();
});

document.querySelector('.order-form').addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const forms = document.querySelectorAll('.beverage');
    if (forms.length > 1) {
      e.target.closest('.beverage').remove();
      updateRemoveButtons();
      updateBeverageNumbers();
    }
  }
});

document.querySelector('.order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('order-modal').classList.remove('hidden');
});

document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('order-modal').classList.add('hidden');
});

updateRemoveButtons();
