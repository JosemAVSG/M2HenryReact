import { NavLink } from "react-router-dom"


const Navbar = ()=>{

    return (
        <>
        <nav >
            <ul>
               <NavLink to='/' >Inicio</NavLink>
               <NavLink to='/historia' >Historia</NavLink>
               <NavLink to='/formulario' >Formulario</NavLink>
               <NavLink to='/about' >Acerca</NavLink>
            </ul>
        </nav>
        </>
    )

}

export default Navbar