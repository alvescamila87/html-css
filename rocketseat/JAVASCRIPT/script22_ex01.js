// Transformar notas escolares

let nota = 90

if(nota < 60) {
        console.log('Nota "F"')
} else if(nota >= 60 && nota <= 69) {
        console.log('Nota "D"')
} else if(nota >= 70 && nota <= 79) {
        console.log('Nota "C"')
} else if(nota >= 80 && nota <= 89) {
        console.log('Nota "B"')
} else {
        console.log('Nota "A"')
}

// outra forma de resolução 2

let score = -1
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score >= 69
let scoreF = score  < 60 && score >= 0

if(scoreA) {
        console.log('Nota "A"')
} else if(scoreB) {
        console.log('Nota "B"')
} else if(scoreC) {
        console.log('Nota "C"')
} else if(scoreD) {
        console.log('Nota "D"')
} else if(scoreF) {
        console.log('Nota "F"')
} else {
        console.log('Nota inválida')
}
        
// outra forma de resolução 3

let notaEscolar = 22
let notaEscolarA = notaEscolar >= 90 && notaEscolar <= 100
let notaEscolarB = notaEscolar >= 80 && notaEscolar <= 89
let notaEscolarC = notaEscolar >= 70 && notaEscolar <= 79
let notaEscolarD = notaEscolar >= 60 && notaEscolar <= 69
let notaEscolarF = notaEscolar  < 60 && notaEscolar >= 0

let scoreFinal;

if(notaEscolarA) {
        scoreFinal = 'Nota "A"'
} else if(notaEscolarB) {
        scoreFinal = 'Nota "B"'
} else if(notaEscolarC) {
        scoreFinal = 'Nota "C"'
} else if(notaEscolarD) {
        scoreFinal = 'Nota "D"'
} else if(notaEscolarF) {
        scoreFinal = 'Nota "F"'
} else {
        scoreFinal = 'Nota inválida'
}

console.log(scoreFinal)
        
// outra forma de resolução 4 - utilizando uma função

function getScore(notaEscolar) {
        let notaEscolarA = notaEscolar >= 90 && notaEscolar <= 100
        let notaEscolarB = notaEscolar >= 80 && notaEscolar <= 89
        let notaEscolarC = notaEscolar >= 70 && notaEscolar <= 79
        let notaEscolarD = notaEscolar >= 60 && notaEscolar <= 69
        let notaEscolarF = notaEscolar  < 60 && notaEscolar >= 0
        
        let scoreFinal;
        
        if(notaEscolarA) {
                scoreFinal = 'Nota "A"'
        } else if(notaEscolarB) {
                scoreFinal = 'Nota "B"'
        } else if(notaEscolarC) {
                scoreFinal = 'Nota "C"'
        } else if(notaEscolarD) {
                scoreFinal = 'Nota "D"'
        } else if(notaEscolarF) {
                scoreFinal = 'Nota "F"'
        } else {
                scoreFinal = 'Nota inválida'
        }
        
        return scoreFinal
}

console.log(getScore(-1));
console.log(getScore(101));
console.log(getScore(100));
console.log(getScore(99));
console.log(getScore(89));
console.log(getScore(79));
console.log(getScore(69));
console.log(getScore(59));