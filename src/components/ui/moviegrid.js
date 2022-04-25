import MovieCard from "./moviecard";

const MovieGrid = ({ movies, addFavorite, removeFromFavorites, setActiveMovie, genres }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, idx) => {
          return (
            <div key={idx} className="col-1">
              <MovieCard movie={movie} addFavorite={addFavorite} removeFromFavorites={removeFromFavorites} setActiveMovie={setActiveMovie} genres={genres(movie.genre_ids)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieGrid;
