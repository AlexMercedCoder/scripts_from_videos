import { A } from "@solidjs/router"
import { json, useRouteData } from "solid-start"
import { createRouteData, createRouteAction } from "solid-start"
import { For } from "solid-js"
import CreateCheese from "~/components/CreateCheese"

export function routeData(){

    const cheeses = createRouteData(async () => {
        const response = await fetch("http://localhost:3000/cheese/cheeses")
        const data = await response.json()
        return data
    })

    return cheeses
}

export default function Cheese(props){



    const routeData = useRouteData()

    console.log(routeData())

    console.log("Hello From the Route")

    return <div>
        <h1>The Cheese Page</h1>
        <For each={routeData()}>
            {cheese => <A href={`/cheese/${cheese.name}`}>{cheese.name}</A>}
        </For>
        <CreateCheese/>
        
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