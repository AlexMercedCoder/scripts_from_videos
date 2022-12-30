export default function router2(router){

    router.get("/", (req, res) => {
        res.send("This is the /router2 route")
    })
}