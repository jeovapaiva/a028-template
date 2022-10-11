
const list = document.getElementById("lista")

const novaLi0 = document.createElement('li')
const novaLiConteudo0 = document.createTextNode('item 0')

navaLi0.appendCheild(novaLiConteudo0)

lista.insertAdJacentElement('afterbegin', novaLi0)

const novaLi5 = document.createElement('li')
const novaLiConteudo5 = document.createTextNode('Item 5')

novaLi5.appendChild(novaLiConteudo5)
lista.insertAdJacentElement('beforeend',novaLi5)
