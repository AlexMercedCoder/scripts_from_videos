class Counter extends HTMLElement {
    constructor(){
        super()

        // state
        this.state = {
            counter: 0
        }

        //shadow dom
        this.attachShadow({mode: "open"})

        //render
        this.build()
    }

    setState(newState){
        if (newState !== this.state){
            this.state = newState
            this.build()
        }
    }

    build(){
        this.shadowRoot.innerHTML = this.render(this.state)
        this.postrender(this.state, this)
    }

    render(state){

        return `<h1>${state.counter}</h1>
        <button>add one</button>`

    }

    postrender(state, element){
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            console.log(state)
            console.log(state.counter)
            element.setState({counter: state.counter + 1})
            })
    }
}

customElements.define("the-counter", Counter)