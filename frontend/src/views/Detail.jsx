import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

//Vista del detalle del producto
const Detail = () => {
    const {id} = useParams(); //Obtención de la URL
    const [product, setProduct] = useState({}); //Variable de estado para obtener el producto
    const navigate = useNavigate(); //Función que permite redirigir hacia una URL específica

    //useEffect para cargar la información del backend
    useEffect(()=>{
        axios.get('http://localhost:5000/api/product/'+id)
        .then(res => setProduct({...res.data}))
        .catch(err => console.log(err));
    },[id]);

    //Elevación de estado para actualizar DOM
    //Eliminar y actualizar
    const removeFromDom = productID =>{
        setProduct(product.filter(producto => producto._id !== productID))
    }

    //Petición DELETE que borre al producto con identificador productID
    const deleteProduct = productID =>{
        axios.delete('http://localhost:5000/api/product/'+productID)
        .then(res => {removeFromDom(productID)})
        .catch(err => console.log(err))
    }

    return(
        <div className='centro'>
            <h1>{product.title}</h1>
            <p><b>Price:</b> {product.price}</p>
            <p><b>Description:</b> {product.description}</p>
            <br/>
            <Link to={"/"+product._id+"/edit"}>Edit</Link>
            <br/>
            <button onClick={e=>navigate('/')}>Home</button>
            <button onClick={e=>{deleteProduct(product._id); navigate('/');}}>Delete</button>
        </div>
    );
}

export default Detail;