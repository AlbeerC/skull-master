import './Reserve.scss'

function Reserve () {

    return (
        <section className="reserve">
            <h2>Solicita un turno</h2>
            
            <form>
                <div className="field">
                    <label>Nombre</label>
                    <input type="text" required/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" required/>
                </div>
                <div className="field">
                    <label>Telefono</label>
                    <input type="number" required/>
                </div>
                <div className="field">
                    <label>Lugar y tamaño</label>
                    <input type="text" required/>
                </div>
                <div className="add-files">
                    <label>Agrega imágenes de referencia</label>
                    <button>Subir archivos</button>
                </div>
                <div className="field">
                    <label>Idea | Asunto</label>
                    <input type="text" />
                </div>
                <input type="submit" value="Enviar tu solicitud"/>
            </form>
        </section>
    )
}

export default Reserve