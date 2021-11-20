// const form = document.querySelector("form")

// form.addEventListener("submit", (event) => {
//     //prevent default
//     event.preventDefault()
//     // construct object
//     const body = {
//         name: form[0].value,
//         address: {
//             street: form[1].value,
//             state: form[2].value
//         }
//     }

//     fetch("/test", {
//         method: "post",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(body)
//     })
//     .then((res) => res.json())
//     .then((data) => {console.log(data)})
// })