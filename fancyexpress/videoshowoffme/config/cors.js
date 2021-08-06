export default (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Headers", "*")
    res.set("Access-Control-Allow-Methods", "*")
    next()
}