// Observer Patter
// Helps to Observe an Object for various acts like an event handler a same element having many event listener

const EventEmitter = require('events')

const celebrity = new EventEmitter()

celebrity.on('Won', (namez) => console.log(namez) ,() => console.log('yay'))
celebrity.on('Won', () => console.log('ah man not again'))
celebrity.on('Lost', () => console.log("Ah shit"))

celebrity.emit('Won', 'Joe')
celebrity.emit('Lost')

