//manipular elementos
//atributos: adicionar atributo em tag ou remover atributo de tag

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID)

header.removeAttribute('class')