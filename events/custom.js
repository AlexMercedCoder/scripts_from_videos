class Eventr {
    events = []

    on(event, callback){
        this.events.push({event, callback})
    }

    emit(event){
        const events = this.events
        for (let e of events){
            if (event === e.event){
                e.callback()
            }
        }
    }
}

const Emitter = new Eventr()
Emitter.on("cheese", () => console.log("gouda"))
Emitter.emit("cheese")