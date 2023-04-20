import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons)
  useEffect(() => {
    dispatch(getPokemons());
  }, [])
  

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: { isLoading ? 'True' : 'False' }</span>
        <ul>
            {
              pokemons.map(pokemon => (
                <li key={ pokemon.name } >{ pokemon.name }</li>
              ))
            }
        </ul>
        <button
          disabled={ isLoading }
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  );
};
