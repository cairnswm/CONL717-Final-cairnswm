import "./scss/main.scss";
import Search from "./pages/search"
import Header from "./components/parts/header"
import Router, { useParams } from "./components/router/router";
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

          <Router.To href="favorites" params="id=5">Favorites</Router.To>
          <Router.To href="search" params="id=1">Search</Router.To>
          <Router.To href="about" params="id=15">About</Router.To>
          <Router.To href="contact">Contact</Router.To>
        </Router.Menu>

      <div className="content">
          <Router.Page hash="favorites"><Favorites /></Router.Page>
          <Router.Page hash="search"><Search /></Router.Page>
          <Router.Page hash="about"><About /></Router.Page>      
          <MovieDetail />
      </div>

</Router>
    </div>
  );
}

export default App;

function Home() {
  const params = useParams();

  return (<div className="row">
    <h1>About</h1><div>About ID: {params.id}</div>
  <div className="col-1 col-s-0">
    <div className="mt2">
      Col 1;
    </div>
  </div>
  <div className="col-3 col-s-4">
    
    <button className="btn btn-info m">Btn Info</button>
    <button className="btn btn-primary m">Btn primary</button>

  </div>
</div>)
}