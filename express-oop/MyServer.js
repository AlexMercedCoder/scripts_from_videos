import Server from "merced-express-oop";

class MyServer extends Server {
    routes(){
        this.app.get("/", (req, res) => res.send("Hello World"))
        this.app.get("/cheese", (req, res) => res.send("cheese"))
        this.app.get("/param/:weee", (req, res) => res.send(req.params.weee))

        return this
    }

    

    
}

export default MyServer