import './Navbar.scss';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <header>
            <ul>
                <Link to="/"><li>Tattoo</li></Link>
                <Link to="/paints"><li>Pintura</li></Link>
                <Link to="/info"><li>Info</li></Link>
            </ul>
            <img src={logo} alt="logo skull master"/>
            <div className="right">
                <Link to="/reserve"><button>Reservar turno</button></Link>
            </div>
        </header>
    )
}

export default Navbar