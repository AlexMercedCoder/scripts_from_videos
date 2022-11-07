const app = require("express")()


app.get("*", (req, res) => {
    res.render("index.ejs", {
        nums: [1,2,3,4,5],
        double: (x) => x * 2
    })
})


app.listen(3000, () => console.log("listening on 3000"))