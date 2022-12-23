import { useLoaderData, Form } from "react-router-dom"
import { Heading } from "../styles"

function Show(props){

    const cheese = useLoaderData()
    return <section style={{width: "70%", margin: "auto"}}>
        <Heading>{cheese.name}</Heading>
        <h2>{cheese.tasty ? "It's Tasty" : "Not Tasty"}</h2>
        <Form action={`/update/${cheese._id}`} method="post">
            <input type="text" name="name" defaultValue={cheese.name}/>
            <input type="checkbox" name="tasty" defaultChecked={cheese.tasty}/>
            <button>Update Cheese</button>
        </Form>
        <Form action={`/delete/${cheese._id}`} method="post">
            <button>Delete Cheese</button>
        </Form>
    </section>
}

export default Show