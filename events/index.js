const {EventEmitter} = require("events")

const Emitter = new EventEmitter()

Emitter.on("cheese", (data) => console.log(data))
Emitter.on("cheese", (data) => console.log(data))
console.log(Emitter.listenerCount())
Emitter.emit("cheese", {cheese: "gouda"})

console.log(Emitter.eventNames())
