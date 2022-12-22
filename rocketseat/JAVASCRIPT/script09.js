/* Function() constructor

    - expressão new
    - criar novo objeto
    - this keyword

*/

function Person(name) {
    this.name = name
}

const camila = new Person('Camila')
console.log(camila)
const bella = new Person('Bella')
console.log(bella)