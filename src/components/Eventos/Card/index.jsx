import './styles.css';
import { LiaArrowRightSolid } from "react-icons/lia";


const Card = (props) => {
    return(
        <div className='card'>
        <div className='card-container'>
            <img src={props.image} className='portrait-image' alt="Eventos corporativos" />
            <div className='frame'></div>

        </div>
        <h2 className='card-title'>{props.title}</h2>
        <button>Conoce más <LiaArrowRightSolid className='card-arrow'/> </button>
        </div>

    )
};

export default Card;