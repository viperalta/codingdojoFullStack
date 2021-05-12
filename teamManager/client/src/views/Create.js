import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";
import PlayerForm from '../components/PlayerForm';

const Create = () => {

    const [players,setPlayers]=useState([]);
    const [errors, setErrors] = useState([]); 
    const history = useHistory();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
        .then(res=> {
            setPlayers(res.data);
        } )
        .catch(err=>console.log('Error:',err))
    },[])

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player/add', player)
            .then(res=>{
                setPlayers([...players, res.data]);
                console.log(res.data);
                 history.push("/players/list");
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
            <PlayerForm onSubmitProp={createPlayer} initialName='' initialPosition='' />   
        </div>
    );
}

export default Create;
