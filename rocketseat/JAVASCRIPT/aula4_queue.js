// elementos na fila
//enqueue(): adicionar elemento ao final da fila
//dequeue(): remover o primeiro elemento a entrar na fila


// passo 1 - modelando
    class Queue {
        constructor() {
            this.data = []
        }

        enqueue(item) {
            this.data.push(item)
            console.log(`${item} chegou na fila!`)

        }

        dequeue() {
            const item = this.data.shift()
            console.log(`${item} saiu da fila!`)

        }

    }

// passo 2 - utilizando
const fila = new Queue()

fila.enqueue('Karoline')
fila.enqueue('Isabel')
fila.enqueue('Paulo')
fila.dequeue()
fila.dequeue()
fila.dequeue()


