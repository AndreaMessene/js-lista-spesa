const listaSpesa = [
    'anguria',
    'pomodori',
    'bistecca',
    'salse'
]
const listaContainer = document.getElementById('lista-spesa')

let i = 0;

while( i < listaSpesa.length){

    const item = listaSpesa[i];

    const listItem = document.createElement('li');
    listItem.innerText = item;
    listaContainer.append(listItem);

    i++
}