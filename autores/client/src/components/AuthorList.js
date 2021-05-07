import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => setAuthors(res.data));
  }, []);

  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id != authorId))
}

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre del Autor</th>
            <th scope="col">Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => {
            return (
              <tr key={index}>
                <td>{author.name}</td>
                <td>
                    <Link  to={'author/'+author._id+'/edit'}><button type="button" className="btn btn-info m-1">Editar</button></Link>
                    <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AuthorList;
