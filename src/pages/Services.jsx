import HeroComponent from "../components/HeroComponent/HeroComponent";
import './services.css';
import inaguracion from '../img/inaguracion.webp';
import aniversarios from '../img/aniversarios.webp';
import conmemoraciones from '../img/conmemoraciones.webp';
import ServicesImage from "../components/ServicesImage";
import pantallas from "../img/pantallas.webp";
import canapes from "../img/canapes.webp";
import charcuteria from "../img/charcuteria.webp";
import postres from "../img/postres.webp";
import floristeria from "../img/floristeria.webp";
import escenografia from "../img/escenografia.webp";


const Services = () => {
    return(
        <div>
            <HeroComponent
            heroHomeTitle='Descubre'
            heroHomeSecondTitle="todos"
            heroThirdTitle='nuestros servicios'
            heroButton='Agendar'
            />

            <h3 className="title title-services">¿Qué <span>tipos de eventos</span> podemos crear?</h3>
            <div className="page-services-container">

                <ServicesImage 
                servImg={inaguracion}
                servTitle='Inaguraciones'
                />
                <ServicesImage 
                servImg={aniversarios}
                servTitle='Aniversarios corporativos'
                />
                <ServicesImage 
                servImg={conmemoraciones}
                servTitle='Conmemoraciones de fechas especiales'
                />
            </div>

                <h3 className="title ">¿Qué <span>SERVICIOS</span> PUEDEN INCLUIR SUS EVENTOS?</h3>
                <p className="paragraph">Nuestro equipo evoluciona constantemente, por lo que si necesitas un servicio que no ves aqui, puedes contactarnos directamente para resolver tus dudas</p>
            <div className="services-detail-container">
                
                <div className="service-min">
                    <img src={pantallas} alt="" className="service-min-img"/>
                    <p className="service-title-min">Pantallas iluminadas</p>
                </div>
                <div className="service-min" >
                    <img src={canapes} alt="" className="service-min-img"/>
                    <p className="service-title-min">Canapés</p>
                </div>
                <div className="service-min">
                    <img src={charcuteria} alt="" className="service-min-img"/>
                    <p className="service-title-min">Charcuteria</p>
                </div>
                <div className="service-min">
                    <img src={postres} alt="" className="service-min-img"/>
                    <p className="service-title-min">Postres</p>
                </div>
                <div className="service-min">
                    <img src={floristeria} alt="" className="service-min-img"/>
                    <p className="service-title-min">Floristeria</p>
                </div>
                <div className="service-min">
                    <img src={escenografia} alt="" className="service-min-img"/>
                    <p className="service-title-min">Escenografia</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Services;