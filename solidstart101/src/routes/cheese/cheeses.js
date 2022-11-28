import { json } from "solid-start";

const cheeses = [
    {name: "Gouda"},
    {name: "Brie"},
    {name: "Munster"}
]

export async function GET(){

    return json(cheeses)

}

export async function POST({request}){
    const body = await new Response(request.body).json()

    cheeses.push(body)

    return json({message: "complete"})
}