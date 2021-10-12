$.ajax("https://dummydata.netlify.app/mariones.json")
.then((data) => {
    for (game of data.nes_games){
        console.log(game)
        const $div = $("<div>").html(`
        <h1>${game.name}</h1>
        <img src="${game.img}"/>
        `)
        $("body").append($div)
    }
})