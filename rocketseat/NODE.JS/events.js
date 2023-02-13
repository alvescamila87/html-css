const {EventEmitter} = require('events')

const ev = new EventEmitter()

console.log(ev)

ev.on('saySomething'), () => {
    console.log('Eu ouvi vc')
}

ev.emit('saySomething')