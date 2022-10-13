import "../ItemListContainer/ItemListContainer.css"
import {Link } from "react-router-dom";

export const ItemListContainer = ({product}) => {
   const {id,title,image,precio} = product 
   
  
   
    return (
        <>
       
            <div className="card my-2 " >
                <div >
                <img src={image} className="card-img-top imagesList" alt="..."></img>
                    <div className="card-body bg-dark">                       
                        <h4 className="card-title bg-warning">{title}</h4>
                        <h5 className="text-warning">Precio: ${precio}</h5>                      
                        <Link to={`/detalle/${id}`} className="btn btn-warning mt-3" ><i>Detalle</i></Link>                       
                    </div>
                </div>
                
            </div>
        </>

    )
}
