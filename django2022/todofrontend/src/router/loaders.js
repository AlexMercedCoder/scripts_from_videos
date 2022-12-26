import URL from "./baseurl"

export const indexLoader = async () => {
    const response = await fetch(URL)
    const todos = await response.json()
    return todos
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `${params.id}/`)
    const todo = await response.json()
    return todo
}