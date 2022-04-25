import { MovieContext } from "../components/context/movieContext";
import { useState, useContext } from "react";
import Card from "../components/ui/card";

const MovieDetail = () => {
  const {
    activeMovie,
    setActiveMovie,
    activeMovieCast,
    activeMovieCrew,
    activeMovieVideos,
    activeMovieImages,
  } = useContext(MovieContext);

  const [tab, setTab] = useState("Videos");
  return (
    <>
      {activeMovie ? (
        <>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => {
                  setActiveMovie(undefined);
                }}
              >
                &times;
              </span>
              <h2>{activeMovie.title}</h2>
              <div className="row">
                <div className="col-1">
                  <img
                    src={`https://image.tmdb.org/t/p/original${activeMovie.poster_path}`}
                    alt="Avatar"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="col-3">
                  <div className="mb2">{activeMovie.overview}</div>

                  {activeMovieCrew &&
                    activeMovieCrew
                      .filter(
                        (item) =>
                          item.job === "Director" ||
                          item.job === "Executive Producer" ||
                          item.job === "Producer"
                      )
                      .map((item, idx) => {
                        return (
                          <div key={idx}>
                            <strong>{item.job}</strong> {item.name}
                          </div>
                        );
                      })}
                </div>
              </div>
              <div className="tab">
                <button
                  className={`tablinks ${tab==="Videos" ? "active" : null}`}
                  onClick={() => {
                    setTab("Videos");
                  }}
                >
                  Videos
                </button>
                <button
                  className={`tablinks ${tab==="Cast" ? "active" : null}`}
                  onClick={() => {
                    setTab("Cast");
                  }}
                >
                  Cast
                </button>
                <button
                  className={`tablinks ${tab==="Crew" ? "active" : null}`}
                  onClick={() => {
                    setTab("Crew");
                  }}
                >
                  Crew
                </button>
                <button
                  className={`tablinks ${tab==="Images" ? "active" : null}`}
                  onClick={() => {
                    setTab("Images");
                  }}
                >
                  Images
                </button>
              </div>

              {tab === "Videos" ? (
                <div id="London" className="tabcontent">
                  <h3>Videos</h3>
                  {activeMovieVideos &&
                    activeMovieVideos
                      .filter((item) => item.type === "Trailer")
                      .map((item, idx) => {
                        return (
                          <div key={idx}>
                            <a
                              href={`https://www.youtube.com/watch?v=${item.key}`}
                            >
                              {" "}
                              {item.name}
                            </a>
                          </div>
                        );
                      })}
                  <em>Click to view trailer on YouTube</em>
                </div>
              ) : null}

              {tab === "Cast" ? (
                <div id="Paris" className="tabcontent">
                  <h3>Cast</h3>
                  <div className="row">
                    {activeMovieCast &&
                      activeMovieCast.filter(item => item.profile_path).map((item, idx) => {
                        return (
                          <div key={idx} className="col-1">
                            <Card>
                                <Card.Image
                                  style={{ maxWidth: "200px" }}
                                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                  alt="Avatar"
                                />
                              <Card.Body>
                                {item.name} as {item.character}
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                      </div>
                  <div className="row">
                      {activeMovieCast &&
                      activeMovieCast.filter(item => !item.profile_path).map((item, idx) => {
                        return (
                          <div key={idx} className="col-1">
                            <Card>
                              <Card.Body>
                                {item.name} as {item.character}
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ) : null}

              {tab === "Crew" ? (
                <div id="Tokyo" className="tabcontent">
                  <h3>Crew</h3>
                  <div className="row">
                    {activeMovieCrew && activeMovieCrew.length > 0 &&
                      activeMovieCrew.map((item, idx) => {
                        return (<div key={idx} className="col-2">
                            <Card>
                              <Card.Body>
                                <strong>{item.name}</strong> ({item.job})
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}                      
                  </div>
                </div>
              ) : null}

              {tab === "Images" ? (
                <div className="tabcontent">
                  <h3>Images</h3>
                  <div className="row">
                    {activeMovieImages && activeMovieImages.backdrops &&
                      activeMovieImages.backdrops.map((item, idx) => {
                        return (
                          <div key={idx} className="col-2">
                            <Card>
                              <Card.Body>
                              <Card.Image
                                  style={{ maxWidth: "200px" }}
                                  src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                                  alt="Avatar"
                                />
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                      {activeMovieImages && activeMovieImages.posters &&
                      activeMovieImages.posters.map((item, idx) => {
                        return (
                          <div key={idx} className="col-1">
                            <Card>
                              <Card.Body>
                              <Card.Image
                                  style={{ maxWidth: "200px" }}
                                  src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                                  alt="Avatar"
                                />
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MovieDetail;
