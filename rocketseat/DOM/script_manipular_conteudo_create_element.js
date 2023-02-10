//criando e adicionando elementos no html


//createElement
const div = document.createElement('div');
div.innerText = "Hello, world how's going? h2"
console.log(div)

//append  (adicionar na página após algum elemento)
const header = document.querySelector('header')

header.append(div)


//prepend (adicionar na página antes de algum elemento)

const main = document.querySelector('main')
main.prepend(div)


//insertBefore
const h2 = document.querySelector('h2')
h2.insertBefore(div, h2)


