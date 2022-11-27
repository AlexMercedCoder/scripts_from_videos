import { A } from "@solidjs/router"
import { json } from "solid-start"

export default function Cheese(props){

    console.log("Hello From the Route")

    return <div>
        <h1>The Cheese Page</h1>
        <A href="/cheese/munster">Munster</A>
    </div>
}

export async function POST({request}){

    const body = await new Response(request.body).json()

    console.log(body)

    return json(body)
}

export async function PUT(){
    return json({message: "This is the put route"})
}

export async function DELETE(){
    return json({message: "This is the delete route"})
}