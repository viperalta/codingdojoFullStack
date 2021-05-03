import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const ProductList = (props) => {
    return (
        <ul>
             {props.products.map((product,index)=>{
                return <li><Link key={index} to={'product/'+product._id}> {product.title}</Link> </li> 
            })}
            
        </ul>
    );
}

export default ProductList;
