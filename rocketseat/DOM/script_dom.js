// getElementById(): retorna diretamente o elemento

const element = document.getElementById('blog-title')
console.log(element);

// getElementByClassName(): retorna um 'HTMLCollection'

const element2 = document.getElementsByClassName('one')
console.log(element2);


// getElementByTagName(): retorna um 'HTMLCollection'

const element3= document.getElementsByTagName('meta')
console.log(element3);

// querySelector(): retorna diretamente o elemento

const element4= document.querySelector('.one')
console.log(element4);

// querySelectorAll(): retorna um 'Nodelist', permite fazer 'forEach'

const element5= document.querySelectorAll('.one')
console.log(element5);
