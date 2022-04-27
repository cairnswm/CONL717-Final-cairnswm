
import {Page} from "../components/ui/page";

const About = () => {
  return (
    <Page>
      <div className="row mb2">
        <div className="col">
          <img src={"logo192.png"} alt="logo" />
        </div>
        <div className="col-3">
          <h1>The Movie Database</h1>
          <div className="mt"> </div>
          Developer: William Cairns
          <br />
          University: Fort Hayes State University (FHSU)
          <br />
          Course: 2022S_INF655G_VA_Front-End Web Development II
          <br />
        </div>
      </div>

      <div className="row mb2">
        <div className="col-4">
          <h4>Final Project Requirements</h4>

          <ol>
            <li>You will build a Movie List Web App using ReactJS.</li>
            <li>
              ALL the movies are required to have ALL of the following:
              <ul>
                <li>Movie Name</li>
                <li>Director  <span style={{color:"red"}}>Displayed in detail view</span></li>
                <li>Category</li>
                <li>Release Year <span style={{color:"red"}}>Not all movies have release year</span></li>
                <li>Image <span style={{color:"red"}}>Poster displayed on search page, more images availale on detail page</span></li>
                <li>YouTube Trailer Link <span style={{color:"red"}}>Not all movies have trailers</span></li>
                <li>Ratings</li>
              </ul>
            </li>
            <li>
              Users should be able to save their favorite movies in their
              favorites list  <span style={{color:"red"}}>Click on the empty star to add to Favorites, click on filled yellow star to remove from favorites</span>
            </li>
            <li>
              Favorite list should be showed as a default list when the main
              page loads  <span style={{color:"red"}}>Favorites display on the Search page on first entry for this requirement but is counter intuitive on the way the program flow works.</span>
            </li>
            <li>
              Users should be able to search for the movies using search bar
              (should be on the main page).  <span style={{color:"red"}}>Available on Search page</span>
            </li>
            <li>
              If the movie is not available should give a notification “Movie
              Not available notification”
            </li>
            <li>
              Your app will retrieve data from The Movie Database (TMDB) API:
              <ul>
                The Movie Database (TMDB) API is free. Sign up with your Gmail
                don’t use FHSU email.
                <li>
                  You must request an API key here:
                  <a href="https://www.themoviedb.org/settings/api">https://www.themoviedb.org/settings/api</a>
                </li>
                <li>
                  Note: It takes a few hours for your API key to be activated
                  after you sign up.
                </li>
                <li>
                  Documentation for The Movie Database (TMDB) API is here:
                  <a href="https://developers.themoviedb.org/3/getting-started/introduction">https://developers.themoviedb.org/3/getting-started/introduction</a>
                </li>
                <li>
                  This youtube link
                  (<a href="https://www.youtube.com/watch?v=bpHtxx_wmqw">https://www.youtube.com/watch?v=bpHtxx_wmqw</a>) will help you to
                  set up your API and fetch data.
                </li>
              </ul>
            </li>
            <li>
              Recommended strategy: Start with the wireframe and create a
              foundation and navigation for your app Plan all the required
              components from the design before writing the code Plan CSS styles
              for design before hand Setup your API and Create a main page with
              navigation bar
            </li>
            <ol><li>Note: Normally, you would not store an API key in GitHub. The The
            Movie Database (TMDB) API we are using is FREE so there is really no
            harm in exposing the API key on GitHub</li></ol>
            <li>
              Submit the following: 
              <ul><li>A link to your GitHub code repository (no
              code updates after the due date accepted on the final project) <a href="https://github.com/cairnswm/FHSU-Web2-Final-cairnswm.git">https://github.com/cairnswm/FHSU-Web2-Final-cairnswm.git</a> </li>
              <li>A
              one-page PDF document discussing what challenges you faced while
              building your project.</li></ul>
            </li>
            <li>Extra Credit: Up to 10 points, If you can deploy the website online. <a href="https://main--cairnswm-moviedb.netlify.app/">https://main--cairnswm-moviedb.netlify.app/</a></li>
          </ol>
        </div>
      </div>
    </Page>
  );
};

export default About;
