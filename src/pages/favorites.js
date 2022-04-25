import { useContext, useState } from "react";
import Page from "../components/ui/page";
import MovieGrid from "../components/ui/moviegrid";
import { MovieContext } from "../components/context/movieContext";
import MovieList from "../components/ui/movielist";

const Favorites = () => {
  const [gridView, setGridView] = useState(true);
  const { favorites,  addToFavorites, removeFromFavorites, setActiveMovie, getGenres } = useContext(MovieContext);
  return (
    <Page>
      <div className="row mt2">
        <div className="col-3">
          <h2>Favorites</h2>
        </div>

        <div className="col-1">
          <span
            onClick={() => {
              setGridView(true);
            }}
          >
            <img src="gridview.png" alt="grid view" style={{ width: "32px" }} />
          </span>
          <span
            onClick={() => {
              setGridView(false);
            }}
          >
            <img
              src="listview.png"
              alt="list view"
              style={{ width: "32px", marginLeft: "15px" }}
            />
          </span>
        </div>
      </div>
      {favorites.length > 0 ? <>
      {gridView ? (
        <MovieGrid movies={favorites}  addFavorite={addToFavorites} removeFromFavorites={removeFromFavorites} setActiveMovie={setActiveMovie} genres={getGenres} />
      ) : (
        <MovieList movies={favorites}  addFavorite={addToFavorites} removeFromFavorites={removeFromFavorites} setActiveMovie={setActiveMovie} genres={getGenres}  />
      )}
      </> : <div>No movies found</div>}
    </Page>
  );
};

export default Favorites;
