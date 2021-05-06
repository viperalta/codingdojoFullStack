import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    
    const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    const onSubmitHandler = e => {
        
        e.preventDefault();
        onSubmitProp({title,price,description});
        //make a post request to create a new person
       /*  axios.post('http://localhost:8000/api/product/add', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err)) */
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;
