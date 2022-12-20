import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { submitAction } from "./actions";
import MyForm from "./components/Form";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import SinglePokemon from "./components/SinglePokemon";
import { pokemonLoader } from "./loader";
import { singlePokemonLoader } from "./loader";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home/>}>
      <Route path="other" element={<h1>Other</h1>}/>
      <Route path="another" element={<h1>another</h1>}/>
      <Route path="pokemon" element={<Pokemon/>} loader={pokemonLoader}/>
      <Route path="pokemon/:id" element={<SinglePokemon/>} loader={singlePokemonLoader}/>
      <Route path="form" element={<MyForm/>}/>
      <Route path="submit" element={<h1>submitted</h1>} action={submitAction}/>
  </Route>
))

export default router