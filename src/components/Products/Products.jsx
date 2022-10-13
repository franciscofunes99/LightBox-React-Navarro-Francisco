import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { veladores } from "../../ProductosVeladores/Productos"

export const Products = () => {
    return (
        <>
            <div className="row">
                <h1 className="text">Productos disponibles</h1>
                <hr></hr>
                {
                    veladores.map((item) =>
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
