import { MovieContext } from "../../components/context/movieContext";
import { useState, useContext } from "react";
import MovieMainCrew from "../../components/ui/moviemaincrew";
import DetailsTabVideo from "./detailstabvideo"
import DetailsTabCast from "./detailstabcast";
import DetailsTabCrew from "./detailstabcrew";
import DetailsTabImages from "./detailstabimages";
import DetailsTabs from "./detailstabs";

const MovieDetail = () => {
  const {
    activeMovie,
    setActiveMovie,
    activeMovieCast,
    activeMovieCrew,
    activeMovieVideos,
    activeMovieImages,
  } = useContext(MovieContext);

  const videosTab = () => {
    return tab === "Videos" 
    ?  (<DetailsTabVideo videos={activeMovieVideos} />) 
    : null
  }

  const castTab = () => {
    return (tab === "Cast" ? (
      <DetailsTabCast cast={activeMovieCast} />
    ) : null)
  }

  const crewTab = () => {
    return (tab === "Crew" ? (
      <DetailsTabCrew crew={activeMovieCrew} />
    ) : null)
  }

  const imagesTab = () => {
    return (tab === "Images" ? (
      <DetailsTabImages images={activeMovieImages} />
    ) : null)
  }

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

                  <MovieMainCrew crew={activeMovieCrew} />
                </div>
              </div>
              <DetailsTabs tab={tab} setTab={setTab} />

              {videosTab()}
              {castTab()}
              {crewTab()}
              {imagesTab()}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MovieDetail;
