import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    

    return (
        <ul>
             {products.map((product,index)=>{
                return (<div key={index}>
                    <li ><Link  to={'product/'+product._id}> {product.title}</Link> </li> 
                    {/* <button onClick={(e)=>{deleteProduct(product._id)}}>Eliminar</button> */}
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </div>
                )
            })}
            
        </ul>
    );
}

export default ProductList;
