/*  switch

*/

//exercicio 01

let expression = 'b'

switch (expression) {
        case 'a':
                //código para expression 'a'
                console.log('a')
                break
        case 'b':
                //código para expression 'b'
                console.log('b')
                break
        default:
                console.log('default')
                break

}


//exercicio 02

function calculate(number1, operator, number2) {
        let result

        switch(operator) {
                case '+':
                        return number1 + number2
                        break
                case '-':
                        return number1 - number2
                        break
                case '*':
                        return number1 * number2
                        break
                case '/':
                        return number1 / number2
                        break
                default:
                        console.log('não implementado')
                        break
        
        }

        return result
}

console.log(calculate(2, "+", 3))
console.log(calculate(2, "*", 3))
console.log(calculate(2, "/", 3))
console.log(calculate(2, "-", 3))
console.log(calculate(2, "%", 3))