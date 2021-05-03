import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="Productapp">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product/:id">
            <Detail />
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
