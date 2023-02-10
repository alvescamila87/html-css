//require: maneira de chamar módulo nativos do node ou módulos que podem ser criados 
// módulos nativos

const path = require('path')

console.log(path.basename(__filename))


// meus módulos
const myModule = require('./exports')
console.log(myModule)