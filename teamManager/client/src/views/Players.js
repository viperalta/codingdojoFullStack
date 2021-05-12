import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PlayerList from "../components/PlayerList";
import Create from "./Create";

const Players = () => {

  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        setPlayers(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error:", err));
  }, []);


  return (
    <div className="players">
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/players/list">Lista</Link>
            </li>
            <li>
              <Link className="noborder" to="/players/addplayer">
                Agregar Jugador
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/players/list">
            {loaded && <PlayerList />}
          </Route>
          <Route path="/players/addplayer">
            <Create />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default Players;
