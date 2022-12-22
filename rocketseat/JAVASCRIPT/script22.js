/*  - if... else

*/

//temperature

let temperature = 36.9

if(temperature >= 38) {
        console.log('Está com febre alta')
} else if(temperature >=37 && temperature <=37.9) {
        console.log('Febre moderada')
} else {
        console.log('Saudável')
}


// nova forma de fazer

let mediumTemperature = temperature >=37 && temperature <=37.9
let highTemperature = temperature >=38

if(highTemperature) {
        console.log('Está com febre alta')
} else if(mediumTemperature) {
        console.log('Febre moderada')
} else {
        console.log('Saudável')
}