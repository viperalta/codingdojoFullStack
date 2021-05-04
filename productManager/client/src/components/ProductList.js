import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";



const ProductList = (props) => {

    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
    }



    return (
        <ul>
             {props.products.map((product,index)=>{
                return (<div key={index}>
                    <li ><Link  to={'product/'+product._id}> {product.title}</Link> </li> 
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Eliminar</button>
                    </div>
                )
            })}
            
        </ul>
    );
}

export default ProductList;
