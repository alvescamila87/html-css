/*  - Operadores condicional (ternário):
        - condição então valor 1 se não valor 2
        - condition ? value1 : value2

*/

//maior de 18

let age = 35

const canDrive = age >=18 ? 'Can drive' : 'Cannot drive'

console.log(canDrive)

// café da manhã

let pao = true
let cafe = true

const cafeTop = pao || cafe ? 'cafe show' : 'cafe ruim'
console.log(cafeTop)

