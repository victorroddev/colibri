
import colibriIconIsolate from '../../assets/svgs/colibri-icon-isolate.svg';
import './styles.css';

const About = () => {
    return(
        <div className='about-container'>
            <div className='about-texts-container'>
                <div>
                    <img src={colibriIconIsolate} alt="Icono de colibri" className='about-colibri-icon'/>
                    <h3 className='title'>No solo</h3>
                    <img src={colibriIconIsolate} alt="Icono de colibri" className='about-colibri-icon' />
                </div>
                <h3 className='title'>Organizamos <span>eventos</span></h3>
                <p className='paragraph'>Somos un equipo creativo, orgulloso de nuestro trabajo. Siempre abordamos nuestros eventos con creatividad, responsabilidad y amor</p>
            </div>
            <div className='about-circles-container'>
                <div className="about-circle">
                    <p>Transformamos <br/><span>ideas</span></p>
                </div>
                <div className='circles-bottom'>
                    <div className="about-circle">
                        <p>Diseñamos <br /> <span>emociones</span></p>
                    </div>
                    <div className="about-circle">
                        <p>Creamos <br /><span>experiencias</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About;