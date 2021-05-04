import React, {useEffect,useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [products,setProducts]=useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res=> {
            setProducts(res.data);
            setLoaded(true);
        } )
        .catch(err=>console.log('Error:',err))
    },[])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
           <ProductForm />
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
