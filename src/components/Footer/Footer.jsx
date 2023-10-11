import './Footer.scss'

function Footer () {

    return (
        <footer>
            <div className="top">
                <div className="left">
                    <p>1652 Stanford St Spc F14</p>
                    <p>De Lunes a Viernes. Solo con cita previa</p>
                </div>
                <div className="middle">
                    <ul>
                        <li>Preguntas frecuentes</li>
                        <li>Cuidados</li>
                        <li>Reservar turno</li>
                    </ul>
                </div>
                <div className="right">
                    <p>skullmaster@gmail.com</p>
                    <p>Instagram</p>
                </div>
            </div>
            <p className="copy">Desarrollado por <a href="https://www.linkedin.com/in/alberto-caminos-5b3961243/">Alberto Caminos</a></p>
        </footer>
    )
}

export default Footer