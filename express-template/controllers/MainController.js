class MainController {
    
    example(req, res){
        res.render("example.ejs", {
            text: "This is an example API Route"
        })
    }


}

export default MainController