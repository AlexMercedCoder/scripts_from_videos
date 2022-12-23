import URL from "./url"
import {redirect} from "react-router-dom"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newCheese = {
        name: formData.get("name"),
        tasty: formData.get("tasty") === "on" ? true : false
    }

    await fetch(URL  + "/cheese", {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newCheese)
    })

    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()

    const updatedCheese = {
        name: formData.get("name"),
        tasty: formData.get("tasty") === "on" ? true : false
    }

    await fetch(URL  + `/cheese/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect("/")
}

export const deleteAction = async ({params}) => {

    await fetch(URL  + `/cheese/${params.id}`, {
        method: "delete",
    })

    return redirect("/")
}