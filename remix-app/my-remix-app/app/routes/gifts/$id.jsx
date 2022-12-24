import { useLoaderData, Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import GiftConnection from "~/models/gifts";

export async function loader({params}){
    const Gift = GiftConnection()
    return await Gift.findById(params.id)
}

export async function action({params, request}){

    const Gift = GiftConnection()
    
    switch(request.method){
        case "PUT":
            const formData = await request.formData()
            await Gift.findByIdAndUpdate(params.id, {
                title: formData.get("title"),
                value: formData.get("value")
            })
            return redirect(`/gifts/${params.id}`)

        case "DELETE":
            await Gift.findByIdAndRemove(params.id)
            return redirect("/")

        default:
            return redirect("/")
    }
}

export default function Show(){
    const gift = useLoaderData()

    return <div>
        <h1>{gift.title}</h1>
        <h2>Price: {gift.value}</h2>
        <h3>Update Gift:</h3>
        <Form method="put">
          <input type="text" name="title" defaultValue={gift.title}/>
          <input type="number" name="value" defaultValue={gift.value}/>
          <button>Create Gift</button>
      </Form>
      <Form method="delete">
          <button>Delete Gift</button>
      </Form>
    </div>
}