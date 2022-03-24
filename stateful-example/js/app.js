const state = {
    list: [],
    name: "Alex Merced"
}

const renderer = {
    div: (stateArg) => {
        return `<h1>List by ${stateArg.name}</h1>
        ${state.list.map((item) => `<h3>${item}</h3>`).join("")}`
    },
    div2: (stateArg) => {
        return `<marquee>Hello, this is what is in the div now</marquee>`
    }
}

const div = document.querySelector("div")
const input = document.querySelector("input")
const button = document.querySelector("button")
const aside = document.querySelector("aside")

div.innerHTML = renderer.div(state)

button.addEventListener("click", () => {
    const inputText = input.value
    state.list.push(inputText)
    div.innerHTML = renderer.div(state)

})

aside.addEventListener("click", () => {
    div.innerHTML = renderer.div2(state)
})