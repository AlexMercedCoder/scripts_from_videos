import { Outlet } from "solid-start";
import { client } from "~/lib/trpc/client";

export default function Breads(props) {

  client.hello.query().then(r => console.log(r))

  return (
    <div>
      <h1>Above</h1>
      <Outlet />
      <h1>Below</h1>
    </div>
  );
}
