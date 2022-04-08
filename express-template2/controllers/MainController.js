class MainController {
    
    example(req, res){
        res.render("example.ejs", {
            text: "This is an example API Route"
        })
    }

    example2(req, res){
        res.send("<h1>Hello World</h1>")
    }


}

export default MainController