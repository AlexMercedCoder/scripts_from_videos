
    /////////////////////////////////////
    // cat Rest Router Wrapper
    ////////////////////////////////////
    // Make sure to pass the desired router to this function
    // for example if you have a router for "/cat" then in server.js you'd write
    // catRestRoutes(app.cat)
    
    export default function catRestRoutes(router){
        
        //********************* */
        // THE INDEX ROUTE
        // get to /cat
        // should return all items
        //********************* */
        router.get("/", async (req, res) => {
            res.json({response: "all the items"})
        })
    
        //********************* */
        // THE SHOW ROUTE
        // get to /cat/:id
        // should return all items
        //********************* */
        router.get("/:id", async (req, res) => {
            const id = req.params.id
            res.json({response: "a single item"})
        })
    
        //********************* */
        // THE CREATE ROUTE
        // post to /cat
        // should create a new item from request body
        //********************* */
        router.post("/", async (req, res) => {
            const body = req.body
            res.json({response: "a new item"})
        })
    
        //********************* */
        // THE UPDATE ROUTE
        // put to /cat/:id
        // should update a particular item from request body
        //********************* */
        router.put("/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            res.json({response: "a new item"})
        })
    
        //********************* */
        // THE DELETE ROUTE
        // delete to /cat/:id
        // should delete the item with the specifed id
        //********************* */
        router.put("/:id", async (req, res) => {
            const id = req.params.id
            res.json({response: "a new item"})
        })
    }
    
    