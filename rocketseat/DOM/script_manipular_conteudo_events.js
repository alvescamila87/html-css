//Events DOM

function print() {
    console.log('print')
}

//executar eventos - modo 1

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

