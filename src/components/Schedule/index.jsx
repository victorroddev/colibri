import './styles.css';
import ruba from '../../img/ruba.webp';
import anthea from '../../img/anthea.webp';
import caravana from '../../img/caravana.webp';
import { LiaArrowRightSolid } from "react-icons/lia";


const Schedule = () => {
    return(
        <div className="schedule">
            <h3 className='title-white'>Descubre cómo convertimos
            ideas en <span>momentos memorables</span></h3>
            <p className='paragraph'>Agenda una reunión vía Meet para contarnos tu idea.</p>

            <div className='schedule-images'>
                
                <div className="schedule-image-container">
                    <img src={ruba} alt=""/>
                </div>
                <div className="schedule-image-container">
                    <img src={anthea} alt="" />
                </div>
                <div className="schedule-image-container">
                    <img src={caravana} alt="" />
                </div>


                
                
            </div>
            <button className=''> Agendar <LiaArrowRightSolid /></button>
        </div>
    )
};

export default Schedule;