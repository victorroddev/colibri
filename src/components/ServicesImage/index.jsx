
import './styles.css';

const ServicesImage = (props) => {
    return(
        <div className="services-image-container">
            <img src={props.servImg} alt="" className='image-service'/>
            <p className='service-title'>{props.servTitle}</p>
        </div>
    )
};

export default ServicesImage;