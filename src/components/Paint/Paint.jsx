import './Paint.scss'
import { useState } from 'react'
import image1 from '../../assets/paints/paint1.jpeg'
import image2 from '../../assets/paints/paint2.jpeg'
import image3 from '../../assets/paints/paint3.jpeg'
import image4 from '../../assets/paints/paint4.jpg'
import image5 from '../../assets/paints/paint5.jpg'
import image6 from '../../assets/paints/paint6.jpeg'
import image7 from '../../assets/paints/paint7.jpeg'
import image8 from '../../assets/paints/paint8.jpg'
import image9 from '../../assets/paints/paint9.webp'

function Paint () {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

    const [selectedImage, setSelectedImage] = useState(null)

    if (selectedImage !== null) {
        document.body.style.overflow="hidden"
    } else {
        document.body.style.overflow="visible"
    }

    const openImage = (index) => {
        setSelectedImage(index)
    }

    const closeImage = () => {
        setSelectedImage(null)
    }

    const nextImage = () => {
        if (selectedImage === images.length - 1 || selectedImage === null) {
            setSelectedImage(0)
        } else {
            setSelectedImage(selectedImage + 1)
        }
    }

    const prevImage = () => {
        if (selectedImage === 0 || selectedImage === null) {
            setSelectedImage(images.length - 1)
        } else {
            setSelectedImage(selectedImage - 1)
        }
    }

    return (
        <section className="paint">
            <div className="paint-gallery">
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Paint ${index + 1}`}
                onClick={() => openImage(index)}
                />
            ))}
            </div>

            {selectedImage !== null && (
                <div className="image-modal">
                    <button className="close-button" onClick={closeImage}>X</button>
                    <button className="prev-button" onClick={prevImage}>&#8249;</button>
                    <img src={images[selectedImage]} alt={`Tattoo ${selectedImage + 1}`} />
                    <button className="next-button" onClick={nextImage}>&#8250;</button>
                </div>
            )}

            <div className="bottom">
                <p>¿Estás interesado en mis pinturas?</p>
                <p>Llena el formulario</p>
            </div>

        </section>
    )
}

export default Paint