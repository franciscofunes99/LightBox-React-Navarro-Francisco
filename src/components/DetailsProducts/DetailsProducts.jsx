import { useParams } from "react-router-dom"
import { veladores } from "../../ProductosVeladores/Productos"
import { Count } from "../Count/Count"

export const DetailsProducts = () => {
    const {id} = useParams()
    
    const productDetails = veladores.find(element => element.id === parseInt(id) );
  return (
    <>
    <div className="row">
        <div className="col-6">
          <div className="card" >
            <div className="card-body bg-dark">
              <h5 className="card-title h1 text-center text-white mb-4 bg-dark py-2 rounded-3">{productDetails.title}</h5>
              <img src={productDetails.image} className="card-img-top w-50" alt={productDetails.title}></img> 
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card" >
            <div className="card-body">            
              <h5 className="card-title h4 bg-dark text-warning p-2">Detalles</h5>
              <p className="card-text py-4">{productDetails.descripcion}</p>
              <hr></hr>
              <h5 className="card-title h4 bg-dark text-warning p-2 rounded mb-3">Precio</h5>
              <span className="card-text  "></span><span className="card-text h3 text-black ms-3">${productDetails.precio}</span>
              <hr></hr>
              <h5 className="card-title h4 bg-dark text-warning p-2 rounded">Cantidad</h5>
              <Count/>
              <hr></hr>
              <button className="btn btn-warning py-0 mt-2" ><i className="bi bi-cart-check-fill fs-3"></i> <span className="fs-3 ms-2"> Comprar</span>         
              </button>            
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


