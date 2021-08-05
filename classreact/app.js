const app = new MiniReact({
    target: "app",
    initialState: {hello: "world"},
    render: (state, element) => {
        console.log(state)
        return `<h1>${state.hello}</h1>`
    }
})

const cheese = new MiniReact({
    target: "cheese",
    initialState: {cheese: "gouda"},
    render: (state, element) => {
        return `
        <style>
        h2 {
            color: red;
        }
        </style>
        <h2>${state.cheese}</h2>
        <button onclick="cheese.setState({cheese: 'munster'})">Hello</button>`
    }
})

document.querySelector("button").addEventListener("click", () => {
    app.setState({hello: "goodbye"})
})