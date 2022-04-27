import Stars from "./stars";

const MovieRow = ({
  movie,
  addFavorite,
  removeFromFavorites,
  setActiveMovie,
  genres,
}) => {
  return (
    <div
      className="row over"
      style={{ borderBottom: "1px solid black", margin: "5px" }}
      onClick={() => {
        setActiveMovie(movie);
      }}
    >
      <div className="col-1">
        {movie.poster_path ? (
          <img
            width="100px"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Avatar"
          />
        ) : null}
        {movie.favorite ? (
          <img
            style={{
              top: "50px",
              right: "50px",
              width: "40px",
              float: "right",
            }}
            src="starfull.png"
            alt="set favorite"
            onClick={(ev) => removeFromFavorites(ev, movie)}
          />
        ) : (
          <img
            style={{
              top: "50px",
              right: "50px",
              width: "40px",
              float: "right",
            }}
            src="emptystar.png"
            alt="set favorite"
            onClick={(ev) => addFavorite(ev, movie)}
          />
        )}
      </div>
      <div className="col-1">
        <h4>{movie.title}</h4>Rating: <Stars number={movie.vote_average} />
        <br />
        {genres}
      </div>
      <div className="col-2">{movie.overview}</div>
    </div>
  );
};

export default MovieRow;
