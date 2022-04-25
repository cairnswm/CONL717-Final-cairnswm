import { useContext, useState } from "react";
import SearchBar from "../components/ui/searchbar";
import Page from "../components/ui/page";
import MovieGrid from "../components/ui/moviegrid";
import { MovieContext } from "../components/context/movieContext";
import MovieList from "../components/ui/movielist";
import Spinner from "../components/ui/spinner";
import Pagination from "../components/ui/pagination"

const Search = () => {
  const [gridView, setGridView] = useState(true);
  const {
    movies,
    setActiveMovie,
    executeSearch,
    addToFavorites,
    removeFromFavorites,
    getGenres,
    page,
    maxPages,
    loading, setLoading,
  } = useContext(MovieContext);
  return (
    <Page>
      <SearchBar className="" onSearch={executeSearch} />
      <div className="row mt">
        <div className="col-3">
          <h2>Search for Movies</h2>
        </div>

        <div className="col-1 mt">
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
      {loading ?
        <Spinner />
      :
      <div className="mt">
        {movies.length > 0 ? (
          <>
            <div>
              <div className="mt">
                <Pagination page={page} maxPages={maxPages} onPageSelect={(page)=>{executeSearch(page)}} />
              </div>
            </div>
            {gridView ? (
              <MovieGrid
                movies={movies}
                addFavorite={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                setActiveMovie={setActiveMovie}
                genres={getGenres}
              />
            ) : (
              <MovieList
                movies={movies}
                addFavorite={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                setActiveMovie={setActiveMovie}
                genres={getGenres}
              />
            )}
          </>
        ) : (
          <div>No movies found</div>
        )}
      </div>
      }
    </Page>
  );
};

export default Search;
