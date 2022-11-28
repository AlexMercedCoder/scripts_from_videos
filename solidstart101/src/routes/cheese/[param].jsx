import {useParams, useSearchParams, json} from "solid-start"

export default function CheeseParam(props){

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(params, searchParams.hello)

    return <h1>The {params.param} Page</h1>
}

export async function POST({request, params, fetch}){
    
    const query = new URLSearchParams(request.url.split("?")[1])

    console.log(fetch)

    console.log(query.get("bread"))

    return json({params, query: {bread: query.get("bread"), vegetable: query.get("vegetable")}})
}