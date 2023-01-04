import { useState } from "react";
import Home from "../pages/Home";
import Cheese from "../pages/Cheese";

export default function Router(props) {
  const [route, setRoute] = useState({
    path: "/",
    props: {},
  });

  const Link = (props) => {
    const handleClick = (event) => {
      console.log(window)

      window.history.replaceState("","", props.path)

      event.preventDefault();
      setRoute({
        path: props.path,
        props: props.props,
      });
    };

    return <a onClick={handleClick}>{props.children}</a>;
  };

  switch (route.path) {
    case "/":
      return <Home {...route.props} Link={Link}/>;
      break;

    case "/cheese":
      return <Cheese {...route.props} Link={Link}/>;
      break;

    default:
      return <h1>Default</h1>;
  }
}
