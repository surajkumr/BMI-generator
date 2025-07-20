const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please give a valid height';
    results.style.color = 'red';
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please give a valid weight';
    results.style.color = 'red';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = '';
    let color = '';

    if (bmi < 18.6) {
      category = 'Under Weight';
      color = 'orange';
    } else if (bmi <= 24.9) {
      category = 'Normal Range';
      color = 'green';
    } else {
      category = 'Over Weight';
      color = 'red';
    }

    results.innerHTML = `<span style="color: black;">Your BMI is <strong>${bmi}</strong></span><br><span style="color: ${color}; font-weight: bold;">${category}</span>`;
  }
});