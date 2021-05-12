import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import GameList from "../components/GameList";

const Status = () => {
  return (
    <div className="status">
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/status/game/1">Juego 1</Link>
            </li>
            <li>
              <Link to="/status/game/2">Juego 2</Link>
            </li>
            <li>
              <Link className="noborder" to="/status/game/3">
                Juego 3
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/status/game/:id">
            <GameList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Status;
