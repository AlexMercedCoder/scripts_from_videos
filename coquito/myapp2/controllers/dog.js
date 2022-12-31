
    /////////////////////////////////////
    // dog Rest Router Wrapper
    ////////////////////////////////////
    // Make sure to pass the desired router to this function
    // for example if you have a router for "/dog" then in server.js you'd write
    // dogRestRoutes(app.dog)
    
    export default function dogRestRoutes(router){
        
        //********************* */
        // THE INDEX ROUTE
        // get to /dog
        // should return all items
        //********************* */
        router.get("/", (req, res) => {
            res.json({response: "all the items"})
        })
    
        //********************* */
        // THE SHOW ROUTE
        // get to /dog/:id
        // should return all items
        //********************* */
        router.get("/:id", (req, res) => {
            const id = req.params.id
            res.json({response: "a single item"})
        })
    
        //********************* */
        // THE CREATE ROUTE
        // post to /dog
        // should create a new item from request body
        //********************* */
        router.post("/", (req, res) => {
            const body = request.body
            res.json({response: "a new item"})
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
    
    