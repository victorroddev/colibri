import './styles.css';

import LightBoxGallery from './LightBoxGallery';

const Gallery = () => {

    return(
        <div className='gallery'>
            <h3 className='title'><span>Momentos</span> capturados</h3>
            <p className='paragraph gallery-paragraph'>Galería de algunos eventos organizados por nosotros</p>
            
            <LightBoxGallery></LightBoxGallery>

        </div>
    )
};

export default Gallery;