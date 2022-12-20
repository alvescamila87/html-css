var x // hoisting, pois é escopo global e também é alterado em escopo local
console.log('existe x antes do bloco?', x)

{
    x = 0 // hoisting
}


/* 

Boas práticas para nomes de variáveis:

    - cameCase
    - escrever as variáveis em inglês
    - nomes de variáveis que explique o que é ou o que faz; 
    - não utilizar iniciar com números 
    - não colocar espaços vazios


*/

// agrupamento de declarações, ex:

let age, isHuman

age = 18
isHuman = true

console.log(age, isHuman)

