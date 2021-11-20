import { useParams, useNavigate, Outlet, Route, Routes } from "react-router"


function Component (props){

    const match = useParams()
    const navigate = useNavigate()

    

    console.log(match)

    return <><h1>{props.text}</h1>
    <Routes>
    <Route path="banana" element={<Component text="banana"/>}/>
    </Routes>
    
    <button onClick={() =>  navigate("/")}>Home</button>
    </>
}

export default Component