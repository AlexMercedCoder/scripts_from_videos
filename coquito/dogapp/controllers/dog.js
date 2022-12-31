
    
    /////////////////////////////////////
    // dog Rest Router Wrapper
    ////////////////////////////////////
    // Make sure to pass the desired router to this function
    // for example if you have a router for "/dog" then in server.js you'd write
    // dogRestRoutes(app.dog)

import Dog from "../models/Dog.js"

    
    export default function dogRestRoutes(router){
        
        //********************* */
        // THE INDEX ROUTE
        // get to /dog
        // should return all items
        //********************* */
        router.get("/", async (req, res) => {
            const dogs = await Dog.findAll()
            console.log(dogs)
            res.render("index.ejs", {dogs})
        })
    
        //********************* */
        // THE SHOW ROUTE
        // get to /dog/:id
        // should return all items
        //********************* */
        router.get("/:id", async (req, res) => {
            const id = req.params.id
            const dog = await Dog.findByPk(id)
            res.render("show.ejs", {dog})
        })
    
        //********************* */
        // THE CREATE ROUTE
        // post to /dog
        // should create a new item from request body
        //********************* */
        router.post("/", async (req, res) => {
            const body = req.body
            await Dog.create(body)
            res.redirect("/dog")
        })
    
        //********************* */
        // THE UPDATE ROUTE
        // put to /dog/:id
        // should update a particular item from request body
        //********************* */
        router.put("/:id", (req, res) => {
            const id = req.params.id
            const body = req.body
            res.json({response: "a new item"})
        })
    
        //********************* */
        // THE DELETE ROUTE
        // delete to /dog/:id
        // should delete the item with the specifed id
        //********************* */
        router.put("/:id", (req, res) => {
            const id = req.params.id
            res.json({response: "a new item"})
        })
    }
    
    