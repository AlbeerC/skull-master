import './Info.scss'
import artist from '../../assets/about.jpg'
import mural from '../../assets/mural.jpg'

function Info () {

    return (
        <section className="info">
            <article className="split">
                <div className="left">
                    <h2>Sobre Skull Master</h2>
                    <p>El estudio de tatuajes Skull Master es un rincón de expresión artística con una rica historia que se remonta a sus humildes comienzos en 2015. Lo que comenzó como un sueño de un apasionado artista del tatuaje, se ha convertido en un punto de referencia en la comunidad de amantes de los tatuajes. Desde su inauguración, hemos estado comprometidos con el arte del tatuaje, la creatividad y la autoexpresión.</p>
                </div>
                <div className="right">
                    <img src={artist} alt="tattoo artist" />
                </div>
            </article>

            <article className="bottom">
                <img src={mural} alt="mural in the street" />
            </article>
        </section>
    )
}

export default Info