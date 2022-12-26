import { redirect } from "react-router-dom"
import URL from "./baseurl"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newTodo = {
        title: formData.get("title"),
        details: formData.get("details")
    }

    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()

    const updatedTodo = {
        title: formData.get("title"),
        details: formData.get("details")
    }

    await fetch(URL + `${params.id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })

    return redirect("/")
}

export const deleteAction = async ({params}) => {
    await fetch(URL + `${params.id}/`, {
        method: "delete",
    })

    return redirect("/")
}