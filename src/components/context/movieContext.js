import { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

const apikey = "7c1f8b72ee2ad28500c545f54aa1b35e";

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [genre, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeMovie, setActiveMovie] = useState();
  const [activeMovieCrew, setActiveMovieCrew] = useState([]);
  const [activeMovieCast, setActiveMovieCast] = useState([]);
  const [activeMovieImages, setActiveMovieImages] = useState([]);
  const [activeMovieVideos, setActiveMovieVideos] = useState([]);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const loadGenres = () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let simplified = [];
        data.genres.forEach((item) => {
          simplified[item.id] = item.name;
        });
        setGenre(simplified);
      });
  };

  useEffect(() => {
    let fav = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(fav);
    setMovies(fav);
    loadGenres();
  }, []);

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        return true;
      }
    }

    return false;
  }

  const loadSearchResults = (newpage) => {
    if (newpage < 1) {
      newpage = 1;
    }
    if (newpage > maxPages) {
      newpage = maxPages;
    }
    setPage(newpage);
    setLoading(true);
    console.log("setPage(page);", newpage);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&append_to_response=videos&query=${searchValue}&page=${newpage}&include_adult=false`;
    console.log("URL", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let list = [];
        setMaxPages(parseInt(data.total_pages));
        data.results.forEach((movie) => {
          if (containsObject(movie, favorites)) {
            movie.favorite = true;
          }
          list.push(movie);
        });
        setMovies(list);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const executeSearch = (nextpage = 1) => {
    if (searchValue && searchValue.length > 4) {
      loadSearchResults(nextpage);
    }
  };

  const addToFavorites = (ev, movie) => {
    ev.stopPropagation();
    ev.preventDefault();
    movie.favorite = true;
    setFavorites([...favorites, movie]);
  };
  const removeFromFavorites = (ev, movie) => {
    ev.stopPropagation();
    ev.preventDefault();
    movie.favorite = false;
    setFavorites(favorites.filter((item) => item.id !== movie.id));
  };

  const loadCredits = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setActiveMovieCrew(data.crew);
        setActiveMovieCast(data.cast);
      });
  };
  const loadVideos = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setActiveMovieVideos(data.results);
      });
  };
  const loadImages = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setActiveMovieImages(data);
      });
  };

  useEffect(() => {
    if (activeMovie) {
      // Load Videos
      loadCredits(activeMovie.id);
      loadVideos(activeMovie.id);
      loadImages(activeMovie.id);
    } else {
      setActiveMovieCrew([]);
      setActiveMovieCast([]);
      setActiveMovieImages([]);
      setActiveMovieVideos([]);
    }
  }, [activeMovie]);

  const getGenres = (items) => {
    let values = [];
    if (genre && items) {
      items.forEach((item) => {
        values.push(genre[item]);
      });
    }
    return values.join(", ");
  };

  return (
    <MovieContext.Provider
      value={{
        loading,
        setLoading,
        getGenres,
        movies,
        page,
        maxPages,
        searchValue,
        setSearchValue,
        executeSearch,
        favorites,
        addToFavorites,
        removeFromFavorites,
        activeMovie,
        setActiveMovie,
        activeMovieCrew,
        activeMovieCast,
        activeMovieVideos,
        activeMovieImages,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
