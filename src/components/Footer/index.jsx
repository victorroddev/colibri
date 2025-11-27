
import './styles.css';
import footerLogo from '../../assets/svgs/logo.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import leftColibri from '../../assets/svgs/left-colibri-footer-icon.png';
import rightColibri from '../../assets/svgs/right-colibri-footer-icon.png';

const Footer = () => {
    return(
        <div className='footer-container'>
            <h3 className='title'><span>Estamos listos </span>para hacer de tu evento una experiencia memorable </h3>
            <img src={footerLogo} alt="" className='footer-logo'/>
            <div className='phone-number-container'>
            <p>Telefono:</p>
            <p>656-000-999-100</p>
            </div>

            <div className='footer-social-media-icons'>
                <a href="" className='facebook-footer-icon'>
                    <FaFacebookSquare  className=''/>
                </a>
                <a href="" className="instagram-footer-icon">
                    <FaInstagramSquare />
                </a>
            </div>
            <p className='footer-links-title'>Sitio</p>
            <div className="footer-links">
                <Link to='/' className='footer-link'>Inicio</Link>
                <Link to='/Services'className='footer-link'>Servicios</Link>
                <Link className='footer-link'>Aviso de privacidad</Link>
                <Link className='footer-link'>Terminos y condiciones</Link>
            </div>

            <div className='footer-shapes'>
                <img src={leftColibri} alt="" className='colibri-left-shape'/>
                <img src={rightColibri} alt="" className='colibri-right-shape'/>
            </div>

        </div>
    )
}

export default Footer;
