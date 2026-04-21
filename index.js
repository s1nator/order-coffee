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

function declineBeverage(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) {
    return 'напиток';
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return 'напитка';
  }
  return 'напитков';
}

document.querySelector('.order-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const count = document.querySelectorAll('.beverage').length;
  const word = declineBeverage(count);
  document.querySelector('.beverage-count-message').textContent = `Вы заказали ${count} ${word}`;

  document.getElementById('order-modal').classList.remove('hidden');
});

document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('order-modal').classList.add('hidden');
});

updateRemoveButtons();
