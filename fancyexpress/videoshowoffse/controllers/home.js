/////////////////////////////////
// This is your main controllers file
// export controllers then import in /controllers/index.js
/////////////////////////////////

// Function for get to "/"
const main = (req, res) => res.json({ hello: "world" });


// export controllers
export default {
    main
}
