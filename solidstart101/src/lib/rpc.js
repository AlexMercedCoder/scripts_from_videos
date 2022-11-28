import server$ from "solid-start/server"

export const logOnServer = server$(async (message) => {
    console.log(message)
})