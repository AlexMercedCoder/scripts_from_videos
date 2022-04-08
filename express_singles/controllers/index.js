class Controllers {
    index(req, res){
        res.render("index.ejs", {name: "Alex Merced"} )
    }

    example(req, res){
        res.send("it works")
    }
}

module.exports = Controllers