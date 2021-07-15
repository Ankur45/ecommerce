import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";


const ProductComponent = () =>{
    const products = useSelector((state)=> state.productReducer.products);
    console.log(products);
  
    const renderList = products.map((product)=>{
        const {id,title,category,price,image} = product;
        
    return(
        <div>
            <div className="four column wide" key ={id}>
            <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        <div className="content">
                        <div className="header">{title} </div>
                        <div className="meta price">${price} </div>
                        <div className="meta">{category} </div>
            </div>
               </div>
                 </div>
                     </div>
                     </Link>
                     </div>
            
                  
            
            </div>
            );
        
        

    })
    return(
        <>
        {renderList}
        </>
    )
}
export default ProductComponent;