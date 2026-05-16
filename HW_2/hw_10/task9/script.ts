let time:string | number = Number(localStorage.getItem('time')) || 0;
let price:number = parseInt(String(localStorage.getItem('price'))) || 100;
let date:number = Date.now();

if (date - time > 10000) {
    price += 10;
    localStorage.setItem('price', String(price));
    localStorage.setItem('time', String(date));
}

const amountE1 = document.getElementById('amount')
    if (amountE1) {
    amountE1.innerText = String(price);
    }
