const Upcoming = require("./upcoming.js")

const upcoming = new Upcoming((res, rej) => {
    if(false){
        res(1)
    } else {
        rej("error")
    }
})

upcoming
.then((val) => console.log(val))
.catch((err) => console.log(err))
.finally(() => console.log("either way"))