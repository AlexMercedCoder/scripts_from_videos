import { createRouteAction } from "solid-start"

export default function CreateCheese(props){
    const [_, {Form}] = createRouteAction(async (formData) => {
        console.log("hello")
        await fetch("/cheese/cheeses", {
            method:"post",
            body: JSON.stringify({name: formData.get("name")})
        })
    })

    return <Form>
    <input type="text" name="name"/>
    <input type="submit"/>
</Form>
}