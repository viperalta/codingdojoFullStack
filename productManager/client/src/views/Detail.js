import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Detail = () => {
    let {id}=useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <p>Descripción: {product.description}</p>
            
                <Link to="/">VOLVER</Link>
            
        </div>
    )
}

export default Detail;
