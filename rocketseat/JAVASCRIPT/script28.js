// for...in
// criar loop em cima de objeto


let person = {
        name: 'Camila',
        age: 35,
        weight: 58,
}

for(let property in person) {
        console.log(property)
        console.log(person["name"]) //acessando propriedades
        console.log(person.name) //acessando propriedades
        console.log(person[property]) //acessando propriedades
}