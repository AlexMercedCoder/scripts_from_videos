import { Outlet } from "solid-start";

export default function Breads(props) {
  return (
    <div>
      <h1>Above</h1>
      <Outlet />
      <h1>Below</h1>
    </div>
  );
}
