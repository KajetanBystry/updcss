const inputs = document.querySelectorAll('.controls input');

function changeValue(){
const valuetype = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + valuetype);
}

inputs.forEach(input => input.addEventListener('change', changeValue));
inputs.forEach(input => input.addEventListener('mousemove', changeValue));


