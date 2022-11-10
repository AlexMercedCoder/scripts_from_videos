function renderNav(message){
    return `
    <nav>
    <h1>${message}</h1>
    </nav>
    `
}

function renderLoop(arr){
    const pieces = arr.map((value) => `<h2>${value}</h2>`)
    return pieces.join(" ")
}

function milesToKm(num){
    return num * 1.6
}

module.exports = {
    renderNav,
    renderLoop,
    milesToKm
}