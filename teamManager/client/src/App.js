
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Players from "./views/Players";
import Status from "./views/Status";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/players/list">Administrar Jugadores</Link>
            </li>
            <li>
              <Link className="noborder" to="/status/game/1">
                Administrar STATUS
              </Link>
            </li>
          </ul>
        </div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Redirect from="/" to="/players/list" exact />
          <Route path="/players/list">
            <Players />
          </Route>
          <Route path="/status/game/:id">
            <Status />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
