import React, {useEffect,useState} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {


    /* const [people,setPeople]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
        .then(res=>setPeople(res.data))
        .catch(err=>console.log('Error:',err))
    },[]) */

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log('Error:',err))
    },[])

    return (
        <div>
           <ProductForm />
           <ProductList products={products} />

           {/* <PersonForm />
           <PersonList people={people} /> */}
        </div>
    )
}

export default Main;
