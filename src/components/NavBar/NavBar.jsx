import { NavLink, Link } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container ">
                    <Link to="/">
                        <img src='https://lightbox-ar.netlify.app/img/logo.png' className="img" alt=''></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <NavLink
                                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'actives' : ''}`}
                                    to={"/"} end>
                                    Inicio
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'actives' : ''}`}
                                    to={"/productos"}>
                                    Productos
                                </NavLink>
                                <li className="nav-item dropdown ">
                                    <NavLink className='nav-link fs-5' data-bs-toggle="dropdown" aria-expanded="true" >
                                        Categorías
                                    </NavLink>
                                    <ul className="dropdown-menu" >
                                        <NavLink
                                            className={({ isActive }) => `nav-link fs-5 activesDropdown2 text-warning dropdown-item  ${isActive ? 'activesDropdown' : ''}`}
                                            to={"categoria/Peliculas"} >
                                            Peliculas
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => `nav-link fs-5 activesDropdown2 text-warning ${isActive ? 'activesDropdown' : ''}`}
                                            to={"categoria/Series"} >
                                            Series
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => `nav-link fs-5 activesDropdown2 text-warning ${isActive ? 'activesDropdown' : ''}`}
                                            to={"categoria/Deporte"} >
                                            Deporte
                                        </NavLink>
                                    </ul>
                                </li>
                                <NavLink
                                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'actives' : ''}`}
                                    to={"/Contacto"}>
                                    Contacto
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    )
}
