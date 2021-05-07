import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const Update = () => {
  let { id } = useParams();
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  const [errors, setErrors] = useState([]); 
  

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id).then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    }).catch((err)=>{
       
    });
  }, []);

  const updateAuthor = author => {
    axios
      .put("http://localhost:8000/api/author/" + id, author)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    }) 
  };

  return (
    <div>
        {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
        
         {loaded && <div><h2>Editar nombre de Autor</h2> <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} /></div>}
         {!loaded && <div className="alert alert-danger" role="alert">Autor no existe. ¿Deseas crear un nuevo autor? <Link to='/author/new'> CREAR AUTOR</Link></div>}
    </div>
     
  );
};

export default Update;
