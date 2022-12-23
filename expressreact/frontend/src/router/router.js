import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
import Show from "../pages/Show";
import { indexLoader, showLoader } from "./loaders";
import { createAction, updateAction, deleteAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
          <Route path="" element={<Index/>} loader={indexLoader}/>
          <Route path="/:id" element={<Show/>} loader={showLoader}/>
          <Route path="/create" action={createAction}/>
          <Route path="/update/:id" action={updateAction}/>
          <Route path="/delete/:id" action={deleteAction}/>
      </Route>
    </>
  )
);

export default router;
