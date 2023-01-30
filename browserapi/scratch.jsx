<Route path="/" element={<App/>}>
    <Route path=":id" element={<Show/>}>
        <Route path="/edit" element={<UpdateForm/>}/>
    </Route>
</Route>

const [showForm, setShowForm] = useState(false)

const form = <Form></Form>

const toggleForm = () => setShowForm(!showForm)

return <div>
    <button onClick={toggleForm}>Show Form</button>
    {showForm ? form : null}
</div>