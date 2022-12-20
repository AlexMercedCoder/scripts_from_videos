import { Outlet } from "react-router-dom"
import { Link, useSearchParams } from "react-router-dom"

function Home(){

    const [search] = useSearchParams()
    console.log(search.get("cheese"))
    return <div>
        <h1>Header</h1>
        <Outlet/>
        <h1>Footer</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/other"><button>Other</button></Link>
      <Link to="/another"><button>Another</button></Link>
      <Link to="/pokemon"><button>Pokemon</button></Link>
    </div>
}

export default Home