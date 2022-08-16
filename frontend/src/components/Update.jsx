import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

//Vista para editar un producto
const Update= () =>{
    const {id} = useParams(); //Obtención de la URL

    //Variables de estado para actualizar un producto
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    //Función que permite redirigir hacia una URL específica
    const navigate = useNavigate();

    //Si el valor del precio es NaN
    if(isNaN(price)){
        setPrice(0); //Envía el valor de 0
    }

    //useEffect para cargar la información del backend
    useEffect(()=>{
        axios.get('http://localhost:5000/api/product/'+id)
        .then(res=>{setTitle(res.data.title); setPrice(res.data.price); setDescription(res.data.description)})
        .catch(err => console.log(err))
    },[id])

    //Función para realizar una petición PUT y actualizar un producto
    const handlerUpdateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/product/'+id, {title, price, description})
        .then(res => {console.log(res); navigate('/'+id);})
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            <h1>Updating a product</h1>
            <form onSubmit={handlerUpdateProduct}>
                <div className='fondo'>
                    <label>Title</label>
                    <input className='val_input' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <br/>
                <div className='fondo'>
                    <label>Price</label>
                    <input className='val_input' type="text" onChange={(e)=>setPrice(parseFloat(e.target.value))}/>
                </div>
                <br/>
                <div className='fondo'>
                    <label>Description</label>
                    <input className='val_input' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <br/>
                <input className='val_button' type="submit" value="Update"/>
                <br/>
                <button className='val_button' onClick={e=>navigate('/')}>Home</button>
            </form>
        </div>
    );
}

export default Update;