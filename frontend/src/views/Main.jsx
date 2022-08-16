import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

//Vista de la página principal
const Main = () => {
    //Variables de estado para obtener los valores del producto
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //Elevación de estado para actualizar DOM
    //Eliminar y actualizar
    const removeFromDom = productId =>{
        setProduct(product.filter(producto => producto._id !== productId))
    }

    //Agregar y actualizar
    const addToDom = newProduct => {
        setProduct([...product,newProduct])
    }

    //useEffect para cargar la información del backend
    useEffect(
        ()=>{
            axios.get('http://localhost:5000/api/products')
            .then(res => setProduct(res.data));
            setLoaded(true);
    },[]);

    return(
        <div>
            <ProductForm addToDom={addToDom}/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;