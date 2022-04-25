import MovieRow from "./movierow";

const MovieList = ({ movies, addFavorite, removeFromFavorites, setActiveMovie, genres }) => {
  return (
    <div className="container">
        {movies.map((movie, idx) => {
          return (
              <MovieRow key={idx} movie={movie} addFavorite={addFavorite} removeFromFavorites={removeFromFavorites} setActiveMovie={setActiveMovie} genres={genres(movie.genre_ids)} />
          );
        })}
    </div>
  );
};

export default MovieList;
