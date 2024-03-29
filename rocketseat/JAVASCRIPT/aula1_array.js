const pilotos = ["Senna", "Hamilton", "Schumacher", "Prost"]

// index: acessar posição
console.log(pilotos[0]);
console.log(pilotos[1]);

// acessar o tamanho do array
console.log(pilotos.length);

// iterável: for.. of
for (let piloto of pilotos) {
    console.log(piloto)
}

// adicionar elemento
pilotos.push("Alonso")
console.log(pilotos)

// encontrar elemento específico
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar elemento

pilotos.splice(1, 1)
console.log(pilotos)