let nbOrder = document.querySelector('.nb-order');
let montantTotal = document.querySelector('.montant-total');

let orderInLocalStorage = localStorage.getItem('order');
console.log(orderInLocalStorage);

let totalInLocalStorage = localStorage.getItem('total');
console.log(totalInLocalStorage);

nbOrder.innerText = `${orderInLocalStorage}`;
montantTotal.innerText = `${totalInLocalStorage}`;