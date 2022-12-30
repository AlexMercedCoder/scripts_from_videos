export default function router1(router){

    router.get("/", (req, res) => {
        res.send("This is the /router1 route")
    })
}