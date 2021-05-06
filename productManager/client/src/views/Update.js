import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import ProductForm from "../components/ProductForm";

const Update = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);

  const updateProduct = product => {
    axios
      .put("http://localhost:8000/api/product/" + id, product)
      .then((res) => {
        console.log(res);
        history.push("/");
      });
  };

  return (
    <div>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
  );
};

export default Update;
