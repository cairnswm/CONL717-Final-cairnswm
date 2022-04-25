import { useState } from "react";
import Card from "./card";
import Stars from "./stars"

const MovieCard = ({ movie, addFavorite, removeFromFavorites, setActiveMovie, genres }) => {
  return (
    <Card className="m over" style={{ position: "relative" }} onClick={() => { setActiveMovie(movie) }}>
      {movie.poster_path ? (
        <Card.Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Avatar"
        />
      ) : (
        <Card.Body>{movie.overview}</Card.Body>
      )}
      {movie.favorite ? (
        <img
          style={{ top: "50px", right: "50px", width: "40px", float: "right" }}
          src="starfull.png"
          alt="set favorite"
          onClick={(ev) => removeFromFavorites(ev,movie)}
        />
      ) : (
        <img
          style={{ top: "50px", right: "50px", width: "40px", float: "right" }}
          src="emptystar.png"
          alt="set favorite"
          onClick={(ev) => addFavorite(ev,movie)}
        />
      )}
      <Card.Header>
        <h4>{movie.title} {movie.release_date ? <span>({movie.release_date.substr(0,4)})</span> : null}</h4>
        Rating: <Stars number={movie.vote_average} /><br/>
        {genres}<br/>
      </Card.Header>
    </Card>
  );
};

export default MovieCard;
