import './Navbar.scss';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <header>
            <ul>
                <li><Link to="/">Tattoo</Link></li>
                <li><Link to="/paints">Pintura</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/date">Contacto</Link></li>
            </ul>
            <img src={logo} alt="" />
            <div className="right">
                <button>Reservar turno</button> 
            </div>
        </header>
    )
}

export default Navbar