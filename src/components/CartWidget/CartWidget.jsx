import { CartModal } from "./cartModal"
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartWidget = () => {
    return (
        <>
            <button
                className="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#carrito">
                <i className="bi bi-cart3 fs-4"></i>
                <span className="ms-2 h4"><AiOutlineShoppingCart/></span>
            </button>
          <CartModal/>   
        </>
    )
}
