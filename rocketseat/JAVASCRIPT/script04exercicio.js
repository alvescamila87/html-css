//1 
let weight 

//2 
console.log(typeof weight)

//3 

let name = "Karoline"
let age = 36
let stars = 4.9
let isSubscribed = true


//4
let student1 = {}
console.log(typeof student1)

//4.1 
let student2 = {
    nome: "Bella",
    age: 62,
    stars: 4.9,
    weight: 58,
    isSubscribed: true
}

console.log(student2)

//4.2
console.log(`${student2.nome} de idade ${student2.age} pesa ${student2.weight} kg.`)

//5
let students

//6
students = [
    student2
]

console.log(students);

//7
console.log(students[0]);

//8

let john = {
    nome: "John",
    age: 23,
    weight: 74.8,
    isSubscribed: false
}

students = [
    student2,
    john
]

console.log(students)

/* ou 
students[1] = john
console.log(students)
*/

//9 - hoisting 
console.log(a)
var a = 1

// 'a' é undefined
