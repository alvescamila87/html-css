// Array

const animals = [
    'Lion',
    'Cheetah',
    'Dog',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

console.log(animals) // imprimindo o array
console.log(animals[1]) // imprimindo uma posição/propriedade do array
console.log(animals.length) // imprimindo total de elementos do array
console.log(animals[4].name) // acessando o objeto dentro do array, não é uma boa prática, pois misturou conceitos