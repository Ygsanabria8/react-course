import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../shared";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q as string);

  const showSearch = (q!.length === 0);
  const showError = (q!.length > 0) && heroes.length === 0;

  const { formState, onInputChange }: {formState:any, onInputChange: any} = useForm({
    searchText: q
  });

  const { searchText } = formState;

  const onSearchSubmit = (event: any) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary" style={{ display: !showSearch ? 'none' : '' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: !showError ? 'none' : '' }}>
            No hero with <b>{ q }</b>
          </div>
          {
            heroes.map(hero =>(
              <HeroCard 
                key={ hero.id }
                hero={ hero }
              />
            ))
          }
        </div>
      </div>
    </>
  );
};
