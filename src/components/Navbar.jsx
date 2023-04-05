import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
    
    return(
        <div className="navbar navbar-dark bg-dark">
           <div className="container">
            {/* <a href="/" className="btn btn-outline-primary">Inicio</a> */}
            <NavLink className="btn btn-outline-primary" to="/" >Inicio</NavLink>
            <NavLink className="btn btn-outline-primary" to="/nosotros" >Nosotros</NavLink>
            <NavLink className="btn btn-outline-primary" to="/contacto" >Contacto</NavLink>
            </div>

        </div>
    )
}

export default Navbar