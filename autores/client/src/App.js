import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Create from "./views/Create";
import Update from "./views/Update";

function App() {
  return (
    <div className="Autores">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">AUTORES FAVORITOS</span>
        </div>
      </nav>

      

      <Router>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/author/:id/edit">
            <Update />
          </Route>
          <Route path="/author/:new">
            <Create />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
