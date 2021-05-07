import React,{useState,useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";

const Create = (props) => {

    const [authors,setAuthors]=useState([]);
    const history = useHistory();
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=> {
            setAuthors(res.data);
        } )
        .catch(err=>console.log('Error:',err))
    },[])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/add', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                console.log(res.data);
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
    }

    return (
        <div>
            {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
            <h2>Añadir un nuevo Autor</h2>
            <AuthorForm onSubmitProp={createAuthor} initialName=''/>
            
        </div>
    );
}

export default Create;
