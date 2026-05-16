let currentNumber:number = Number(localStorage.getItem('number')) || 0;

currentNumber += 1

localStorage.setItem('number', String(currentNumber));

const target = document.getElementById('target')
    if(target) {
        target.innerText = String(currentNumber);
    }