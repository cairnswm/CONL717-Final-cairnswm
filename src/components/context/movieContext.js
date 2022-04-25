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
  const [activeMovie, setActiveMovie] = useState()
  const [activeMovieCrew, setActiveMovieCrew] = useState([])
  const [activeMovieCast, setActiveMovieCast] = useState([])
  const [activeMovieImages, setActiveMovieImages] = useState([])
  const [activeMovieVideos, setActiveMovieVideos] = useState([])
  // const testData = [
  //   {
  //     adult: false,
  //     backdrop_path: "/3sF6AibdbTTkswfSRxXEGCt5w6s.jpg",
  //     genre_ids: [28, 12, 14],
  //     id: 847,
  //     original_language: "en",
  //     original_title: "Willow",
  //     overview:
  //       "The evil Queen Bavmorda hunts the newborn princess Elora Danan, a child prophesied to bring about her downfall. When the royal infant is found by Willow, a timid farmer and aspiring sorcerer, he's entrusted with delivering her from evil.",
  //     popularity: 18.153,
  //     poster_path: "/jfTpuQGMHinR3dc6mZ5bXq3mTKk.jpg",
  //     release_date: "1988-05-20",
  //     title: "Willow",
  //     video: false,
  //     vote_average: 7,
  //     vote_count: 1404,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/u4QBchp2LtJBc9LJdn210T76pHO.jpg",
  //     genre_ids: [12, 27, 9648, 53],
  //     id: 185460,
  //     original_language: "en",
  //     original_title: "Willow Creek",
  //     overview:
  //       "A young couple ventures into the woods to capture footage of the elusive Bigfoot.",
  //     popularity: 10.186,
  //     poster_path: "/8pP4tEeM7R6G4MSyxhFblwCja1P.jpg",
  //     release_date: "2013-05-02",
  //     title: "Willow Creek",
  //     video: false,
  //     vote_average: 4.9,
  //     vote_count: 233,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/uegOuTy3aRuLQ7DMAJHVJSsJc29.jpg",
  //     genre_ids: [27],
  //     id: 404584,
  //     original_language: "en",
  //     original_title: "From a House on Willow Street",
  //     overview:
  //       "After a young woman is kidnapped, her captors soon come to realize that in fact they may be the ones in danger and this young woman has a dark secret inside her.",
  //     popularity: 12.05,
  //     poster_path: "/d3aHtMxYUmGAyYrTNk52BqXeOQl.jpg",
  //     release_date: "2017-03-24",
  //     title: "From a House on Willow Street",
  //     video: false,
  //     vote_average: 4.8,
  //     vote_count: 140,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [27, 53, 28, 35, 16, 12, 18, 14],
  //     id: 742254,
  //     original_language: "en",
  //     original_title: "The Curse of Willow Song",
  //     overview:
  //       "Having served her time for arson, Willow Song is now fending for herself on the unforgiving streets of Vancouver’s Downtown Eastside. There, she’s asked to contend with the squalid condition of her SRO, a sketchy bestie, her ongoing struggle to stay clean, constant harassment in her workplace and festering resentment towards Asian-Canadians. With the fates seemingly conspiring against her, she’s thrown a lifeline by a figure from her past. As Willow holes up in an abandoned warehouse, her latent psychokinetic abilities manifest and an uncanny transformation commences.",
  //     popularity: 2.423,
  //     poster_path: "/2T6tq9gsdUik2KexiWWPdXw8j3I.jpg",
  //     release_date: "2020-09-24",
  //     title: "The Curse of Willow Song",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [18],
  //     id: 137058,
  //     original_language: "en",
  //     original_title: "Willow Springs",
  //     overview:
  //       "Three women retreat to a hacienda in the Mojave Desert and vengefully lure men to their deaths to the siren song of the Andrews Sisters' \"Rum And Coca-Cola,\" in Werner Schroeter's sublimely strange fever dream of a film.",
  //     popularity: 0.6,
  //     poster_path: "/hyOPVZzarDhcYcd7wP28KaCo8CU.jpg",
  //     release_date: "1973-04-03",
  //     title: "Willow Springs",
  //     video: false,
  //     vote_average: 5.3,
  //     vote_count: 4,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [],
  //     id: 800480,
  //     original_language: "en",
  //     original_title: "Woodrow and Willow",
  //     overview: "A reclusive woodworker processes the death of his wife.",
  //     popularity: 0.6,
  //     poster_path: null,
  //     release_date: "",
  //     title: "Woodrow and Willow",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [18, 10751, 10770],
  //     id: 51591,
  //     original_language: "en",
  //     original_title: "Christmas Comes to Willow Creek",
  //     overview:
  //       "Two brothers' lives are changed forever when they hit the road to a snowbound Alaskan village. Brother Ray and Pete had been feuding for years. So, when their ailing father asks them to drive a semitruck full of gifts and supplies from California to the isolated Alaskan village of Willow Creek, they agree ---- reluctantly. Along the way, they pick up trouble when they're joined by Jessie, who is Ray's estranged wife and Pete's ex-girlfriend. Then, a blizzard strands the truck deep in the Alaskan wilderness. Miles from help, with time running our fast, they realize only a miracle can save them. But, as they are about to be reminded, Christmas...is the season for miracles.",
  //     popularity: 1.837,
  //     poster_path: "/yrBNa1lbSG10qpk8irqpNEBknfO.jpg",
  //     release_date: "1987-12-20",
  //     title: "Christmas Comes to Willow Creek",
  //     video: false,
  //     vote_average: 8,
  //     vote_count: 2,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [12, 99, 14],
  //     id: 697921,
  //     original_language: "en",
  //     original_title: "Willow: The Making of an Adventure",
  //     overview:
  //       "A behind-the-scenes documentary on the making of the film Willow (1988). Included are interviews with cast and crew and scenes of the actual filming of the production itself.",
  //     popularity: 2.23,
  //     poster_path: "/92MpQJrrmlrnZOZIxD0U21pVUhB.jpg",
  //     release_date: "1988-04-26",
  //     title: "Willow: The Making of an Adventure",
  //     video: false,
  //     vote_average: 7.3,
  //     vote_count: 4,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [],
  //     id: 723653,
  //     original_language: "en",
  //     original_title: "Willow Tree",
  //     overview: "A '70s short by Marlys Skelton.",
  //     popularity: 0.6,
  //     poster_path: null,
  //     release_date: "",
  //     title: "Willow Tree",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [18],
  //     id: 269597,
  //     original_language: "en",
  //     original_title: "Crack Willow",
  //     overview:
  //       "Crack Willow is an affectionate portrait of one man's struggle with death and loneliness. Mark Walker's journey is an exploration of emotions captured through the use of vivid, powerful and imaginative imagery. A compelling and evocative film that treads new ground.",
  //     popularity: 0.6,
  //     poster_path: null,
  //     release_date: "2008-06-22",
  //     title: "Crack Willow",
  //     video: false,
  //     vote_average: 10,
  //     vote_count: 1,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [878, 28],
  //     id: 959572,
  //     original_language: "en",
  //     original_title: "Weeping Willow",
  //     overview:
  //       "When Willow is picked for the 52nd Hunger Games, her brother Tristan chooses to volunteer so she does not have to face the games alone. As they struggle through the arena, Willow must come to terms with the fact that only one of them can make it home.",
  //     popularity: 0.6,
  //     poster_path: "/tRdBUxOunmNe6aItwAkZtABnyjZ.jpg",
  //     release_date: "2014-05-12",
  //     title: "Weeping Willow",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/sq22Pzm3wHI6JWrGSBcvQFJEQMq.jpg",
  //     genre_ids: [18],
  //     id: 651941,
  //     original_language: "en",
  //     original_title: "The Willow Tree",
  //     overview:
  //       "After Ned Hamilton is rejected by his girlfriend, he travels to Japan where he hears an old legend about the Willow Tree Princess, who kills herself so that her lover will go off to battle. When he makes a purchase from Tomotada, an image maker, he meets his pretty daughter O-Riu, and they recreate the events of the legend.  A complete version is held by the George Eastman Museum.",
  //     popularity: 0.841,
  //     poster_path: "/4B6WXlyLzW2Lnm5WuY2OdjkH4bu.jpg",
  //     release_date: "1920-01-31",
  //     title: "The Willow Tree",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [35, 36, 10752],
  //     id: 172338,
  //     original_language: "en",
  //     original_title: "The Battle of Pussy Willow Creek",
  //     overview:
  //       'Ken Burns meets Spinal Tap in a subversive tour de force relaying the outrageous life stories of four forgotten Civil War heroes: an opium-addicted gay Colonel, an aging Chinese launderer, a nerdy escaped slave, and a one-armed teenage prostitute. Both wickedly satirical and deeply affectionate, The Battle of Pussy Willow Creek tells the "100% true" story of how these oddball outsiders saved the Union from a nefarious foreign plot, how the forces of bigotry expunged their stunning victory from the history books, and - most importantly - how meeting one\'s ex on the field of battle can be just the thing to re-spark a detoured romance.',
  //     popularity: 1.75,
  //     poster_path: "/oxDap070qR9xfK9UikzKhKU3Qqz.jpg",
  //     release_date: "2013-03-01",
  //     title: "The Battle of Pussy Willow Creek",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [99],
  //     id: 704272,
  //     original_language: "ja",
  //     original_title: "Out Town Willow",
  //     overview:
  //       "Sketch of a Spring weekend afternoon in the Demachiyanagi area of Kyoto, exploring literal and figurative time distortions. Filmed on a single reel of 30 year old Kodachrome, it was processed in a home-made soup of instant coffee, vitamin C, and soda.",
  //     popularity: 0.6,
  //     poster_path: "/hNz0RFCYNZ8Wezzh40DB8RJSZIW.jpg",
  //     release_date: "2016-01-29",
  //     title: "Out Town Willow",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [99],
  //     id: 891382,
  //     original_language: "en",
  //     original_title: "The Silent Willow",
  //     overview:
  //       "Uterine fibroids affect Black women three times more than women of any other race. After being diagnosed, the filmmaker sets out to explore health inequities and find out why so many Black women are as silent as the growth.",
  //     popularity: 0.6,
  //     poster_path: null,
  //     release_date: "2021-11-12",
  //     title: "The Silent Willow",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [],
  //     id: 749207,
  //     original_language: "en",
  //     original_title: "Willow Creek Road",
  //     overview:
  //       "A lonely ranch hand in rural Montana unexpectedly picks up two children by the side of the road. Out of her comfort zone, she is forced to confront herself.",
  //     popularity: 0.6,
  //     poster_path: "/pWH02ovKeAGpEyYXl9F9okxWLXL.jpg",
  //     release_date: "2017-10-01",
  //     title: "Willow Creek Road",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/tWl6iDGJTRuvfveRloq4hDoylQs.jpg",
  //     genre_ids: [16, 37],
  //     id: 146017,
  //     original_language: "en",
  //     original_title: "The Man from Button Willow",
  //     overview:
  //       "In 1869, Justin Eagle lives on his ranch called \"The Eagle's Nest\" near the town of Button Willow, California. In addition to being a rancher, Juston is a trouble-shooter for the U. S. Government which calls for him to act as an undercover operative and thwart the forces of evil in the rapidly-growing West. He is sent to San Franciso to find missing U. S. Senaator Freeman, who has disappeared while fighting the efforts of Montgomery Blaine, a villain who has been, with the aid of his henchman, \"The Whip,\" forcing settlers to sell their land to him, not knowing that the land is in the path of a proposed railroad, from Utah, that will link the western United States to the East. Senator Freeman is the leader of an effort to veer the railroad southward to bypass Blaine's land and, for his efforts, is kidnapped by Bliane's henchmen and shanghaied from the San Francisco waterfront. Justin Eagle's job is to find and return him safely.",
  //     popularity: 0.84,
  //     poster_path: "/yl8UF83jATnZ8HvNVmF6Is6Eeoi.jpg",
  //     release_date: "1965-04-03",
  //     title: "The Man from Button Willow",
  //     video: false,
  //     vote_average: 5,
  //     vote_count: 1,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [],
  //     id: 966442,
  //     original_language: "en",
  //     original_title: "Green Willow for Delaware",
  //     overview:
  //       '"it continued to rain all day for some reason people started to talk about Delaware no one knew anything about it no one had been there or knew anyone from there..."',
  //     popularity: 0.6,
  //     poster_path: "/tglBr5TcKCnQRF2MewGKUDnVBhK.jpg",
  //     release_date: "1974-01-01",
  //     title: "Green Willow for Delaware",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [99],
  //     id: 430134,
  //     original_language: "en",
  //     original_title: "The Story of Willow Run",
  //     overview:
  //       "This Ford Motor Company promotional film describes its huge aircraft factory at Willow Run, east of Ypsilanti, Michigan. The plant made B-24 Liberator heavy bombers during World War II. At peak capacity, one four-engine B-24 rolled out the door every 55 minutes. The plant combined parts fabrication with final assembly under one roof, and employed up to 42,000 workers. This film also provides a detailed description of each stage of construction of a B-24, including parts manufacture, assembly, and flight test.",
  //     popularity: 0.6,
  //     poster_path: null,
  //     release_date: "1945-01-01",
  //     title: "The Story of Willow Run",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: null,
  //     genre_ids: [],
  //     id: 552868,
  //     original_language: "en",
  //     original_title: "Death to the Weeping Willow",
  //     overview: "A voice cries out for help in the night.",
  //     popularity: 0.6,
  //     poster_path: "/K8iu7la2hxYKJNdGxiSbbocApv.jpg",
  //     release_date: "",
  //     title: "Death to the Weeping Willow",
  //     video: false,
  //     vote_average: 0,
  //     vote_count: 0,
  //   },
  // ];

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const loadGenres = (id) => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let simplified = [];
        data.genres.forEach(item => {
          simplified[item.id] = item.name
        })
        setGenre(simplified);
      });
  }

  useEffect(() => {
    let fav = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(fav);
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

  const loadSearchResults = (page) => {
    if (page < 1) { page = 1 }
    if (page > maxPages) { page = maxPages }
    setPage(page);
    console.log("setPage(page);",page);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&append_to_response=videos&query=${searchValue}&page=${page}&include_adult=false`;
    console.log("URL",url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let list = [];
        setMaxPages(parseInt(data.total_pages))
        data.results.forEach((movie) => {
          if (containsObject(movie,favorites)) {
            movie.favorite = true;
          }
          list.push(movie);
        });
        setMovies(list);
      });
  }

  const executeSearch = (page=1) => {
    if (searchValue && searchValue.length > 4) {
      setMovies([]);
      loadSearchResults(page)
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
  }
  const loadVideos = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setActiveMovieVideos(data.results);
      });
  }
  const loadImages = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setActiveMovieImages(data);
      });
  }

  useEffect(() => {
    if (activeMovie) {
        // Load Videos
        loadCredits(activeMovie.id)
        loadVideos(activeMovie.id)
        loadImages(activeMovie.id)
    } else {
      setActiveMovieCrew([]);
      setActiveMovieCast([]);
      setActiveMovieImages([]);
      setActiveMovieVideos([]);
    }
  },[activeMovie])

  const getGenres = (items) => {
    let values = [];
    if (genre && items) {
      items.forEach(item => {
        values.push(genre[item])
      })
    }
    return values.join(", ")
  }

  return (
    <MovieContext.Provider
      value={{
        movies,searchValue, setSearchValue,
        activeMovie, setActiveMovie,activeMovieCrew,activeMovieCast,activeMovieVideos,activeMovieImages,getGenres,page,maxPages,
        favorites,
        executeSearch,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
