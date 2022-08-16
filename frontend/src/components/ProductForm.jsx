import React, {useState} from 'react';
import axios from 'axios';

//Formulario para agregar un producto
const ProductForm = (props) => {
    //Desestructuración
    const {addToDom} = props;

    //Variables de estado para agregar un producto
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    //Método para subir la información a la Base de Datos
    const onSubmitHandler = e => {
        e.preventDefault(); //Manejador para que no se ejecute el evento por defecto

        //Petición POST
        axios.post('http://localhost:5000/api/product/new',{title, price, description})
        .then(res => {
            console.log("Respuesta exitosa: ", res);
            addToDom(res.data.insertedProduct);
        })
        .catch(err => console.log("Petición fallida: ", err))
    }
    
    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
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
            <input className='val_button' type="submit" value="Create"/>
        </form>
    );
}

export default ProductForm;