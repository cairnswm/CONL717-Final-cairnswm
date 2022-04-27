import "./scss/main.scss";
import Search from "./pages/search"
import Header from "./components/parts/header"
import Router from "./components/router/router";
import About from "./pages/about"
import Favorites from "./pages/favorites";
import MovieDetail from "./pages/moviedetails";

function App() {
  return (
    <div className="">
      <Header>
        <h1>The Movie Database</h1>
      </Header>

      <Router>
        <Router.Menu>

          <Router.To href="favorites">Favorites</Router.To>
          <Router.To href="search">Search</Router.To>
          <Router.To href="about">About</Router.To>
        </Router.Menu>

      <div className="content">
          <Router.Page hash="favorites"><Favorites /></Router.Page>
          <Router.Page hash="search"><Search /></Router.Page>
          <Router.Page hash="home"><Search /></Router.Page>
          <Router.Page hash="about"><About /></Router.Page>      
          <MovieDetail />
      </div>

</Router>
    </div>
  );
}

export default App;
