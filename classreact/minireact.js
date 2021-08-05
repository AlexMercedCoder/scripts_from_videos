class MiniReact {
    constructor(config){
        this.element = document.querySelector(`[r-target=${config.target}]`)
        this.state = config.initialState ?? {}
        this.render = config.render
        this.build(this)
    }

    build(){
        this.element.innerHTML = this.render(this.state, this)
    }

    setState(newState){
        if(newState !== this.state){
            this.state = newState
            this.build()
        }
    }
}