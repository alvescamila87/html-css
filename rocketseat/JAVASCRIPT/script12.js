/* Manipulando string e números

    - transformar string em número
    - transformar número em string

*/

let string = '123'
console.log(Number(string)) // transformar string em número

let number = 1313
console.log(String(number)) // transformar número em string

//2 contar quantos caracteres tem uma palavra e quanto dígitos tem um número

let word = 'Paralelepipedo'
console.log(word.length) // contar quantos caracteres tem uma palavra

let number2 = 93615616
console.log(String(number2).length) // contar quanto dígitos tem um número


//3 transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 651616.9816161
console.log(number3.toFixed(3).replace(".", ",")) // transformou em string
console.log(Number(number3.toFixed(3))) // transformou em número

//4 transformar maiúsculas em minusculas e vice-versa
let word1 = "Programar é muito bacana!"
console.log(word1.toUpperCase())
console.log(word1.toLowerCase())

//5 verificar se tem palavra específica

let phrase = "Eu quero verificar o amor!"
console.log(phrase.includes("amor"))