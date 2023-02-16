// lifo: last in, first out
// push incluir 
// pop remover
// peek tirar do topo

// passo 1 - modelando

class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data = [this.top] = value
        return this.data
    }

    pop() {
        if (this.data < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}


// passo 2 - utilizando

const stack = new Stack()

// adicionar dados

stack.push('learning')
stack.pop('data')
console.log(stack.push('structures'))
console.log(stack.peek())

// remover

stack.pop()
console.log(stack.pop())
console.log(stack.peek())