import "./Tattoo.scss";
import { useState } from "react";
import image1 from '../../assets/tattoos/1.jpeg'
import image2 from '../../assets/tattoos/2.jpeg'
import image3 from '../../assets/tattoos/3.jpeg'
import image4 from '../../assets/tattoos/4.jpeg'
import image5 from '../../assets/tattoos/5.jpeg'
import image6 from '../../assets/tattoos/6.jpeg'
import image7 from '../../assets/tattoos/7.jpeg'
import image8 from '../../assets/tattoos/8.jpeg'
import image9 from '../../assets/tattoos/9.jpeg'
import image10 from '../../assets/tattoos/10.jpeg'
import image11 from '../../assets/tattoos/11.jpeg'
import image12 from '../../assets/tattoos/12.jpeg'
import image13 from '../../assets/tattoos/13.jpg'
import image14 from '../../assets/tattoos/14.jpg'
import image15 from '../../assets/tattoos/15.jpg'
import image16 from '../../assets/tattoos/16.jpeg'
import image17 from '../../assets/tattoos/17.jpeg'
import image18 from '../../assets/tattoos/18.jpg'
import Landing from "../Landing/Landing";
import { Link } from "react-router-dom";

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8,
  image9, image10, image11, image12, image13, image14, image15, image16, image17, image18,
];

function Tattoo() {
  const [selectedImage, setSelectedImage] = useState(null);

  if (selectedImage !== null) {
    document.body.style.overflow="hidden"
  } else {
    document.body.style.overflow="visible"
  }

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === images.length - 1 || selectedImage === null) {
      setSelectedImage(0)
    } else {
      setSelectedImage(selectedImage + 1)
    }
  };

  const prevImage = () => {
    if (selectedImage === 0 || selectedImage === null) {
      setSelectedImage(images.length - 1)
    } else {
      setSelectedImage(selectedImage - 1)
    }
  };

  return (
    <section className="tattoo">
      <Landing />
      <div className="tattoo-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Tattoo ${index + 1}`}
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
        <p>¿Listo para reservar tu tatuaje?</p>
        <Link to="/reserve"><p>Llena el formulario</p></Link>
      </div>
    </section>
  );
}


export default Tattoo