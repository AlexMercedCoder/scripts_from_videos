import { redirect } from "react-router-dom"

export async function submitAction({request}){
    const formData = await request.formData()
    console.log(formData)
    console.log(formData.get("text"))
    return redirect("/")
}