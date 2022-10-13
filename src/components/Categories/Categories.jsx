import { useParams } from "react-router-dom"
import { veladores } from "../../ProductosVeladores/Productos"
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

export const Categories = () => {
    const { categoria } = useParams()
    
    return (
        <>
            <div className="row">
                <h1 className="text">{categoria.toUpperCase()}</h1>
                <hr></hr>
                {
                    veladores.map((item) => item.categoria === categoria &&
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
