import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorList from "../components/AuthorList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error:", err));
  }, []);


  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-4">
            <Link to="/author/new">
              <button type="button" className="btn btn-primary">
                Agregar Autor
              </button>
            </Link>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
      {loaded && <AuthorList />}
    </div>
      
  );
};

export default Main;
