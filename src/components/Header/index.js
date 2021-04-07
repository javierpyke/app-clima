import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <header>
            <NavLink to={"/"}><h1 className="titulo">climaXciudades</h1></NavLink>
            <img src='../img/clima.png' alt='logo' title='Es el logo' />  
        </header>
    )
}

export default Header;