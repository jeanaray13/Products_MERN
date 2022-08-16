import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//Vista de las lista de productos agregadas
const ProductList = (props) => {
    //Desestructuración
    const {product, removeFromDom} = props;

    //Petición DELETE que borra un producto con identificador productID
    const deleteProduct = productID =>{
        axios.delete('http://localhost:5000/api/product/'+productID)
        .then(res => removeFromDom(productID))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>All Products:</h1>
            {
                product.map((producto,idx)=>{
                    return(
                        <div>
                            <p className='lista' key={idx}><Link to={"/"+producto._id}>{producto.title}</Link></p>
                            <button className='lista_btn' onClick={e=> deleteProduct(producto._id)}>Delete Product</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;