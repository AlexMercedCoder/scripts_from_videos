import { Form } from "react-router-dom";

function MyForm(){
    return <Form action="/submit" method="post">
        <input type="text" name="text"></input>
        <input type="submit" />
    </Form>
}

export default MyForm