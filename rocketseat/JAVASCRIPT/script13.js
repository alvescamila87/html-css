/* Manipulando Arrays

criar array com constructor

*/

// normal
let myArray = ["a", "b", "c"]
console.log(myArray)

//com constructor

let myArray2 = new Array("a", "b", "c")
console.log(myArray)



//2 contar elementos de array
console.log([
    "a",
    {type: "array"},
    function() {return "alô"},
].length)

//3 acessar elementos de array
console.log([
    "a",
    {type: "array"},
    function() { return "alô" },
][2]())

//4 transformar uma cadeia de caracteres em elemntos de um array

let word2 = "manipulação"
console.log(Array.from(word2))

//5 manipulando arrays - exercícios

let techs = ["html", "css", "js"]

//5.1 adicionar item no fim do array
techs.push("php")
console.log(techs)

//5.2 adicionar item no começo do array
techs.unshift("sql")
console.log(techs)

//5.3 remover item no final do array
techs.pop()
console.log(techs)

//5.4 remover item no começo do array
techs.shift()
console.log(techs)

//5.5 pegar somente alguns elementos do array
techs.slice(1,3)

//5.6 remover 1 ou mais itens em qualquer posição do array
techs.splice(1)

//5.7 encontrar a posição de um elemento do array
let index = techs.indexOf('css')
console.log(index)

techs.splice(index, 1)