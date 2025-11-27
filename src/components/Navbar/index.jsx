import colibriText from '../../assets/svgs/colibri-text.svg';
import colibriTextBlack from '../../assets/svgs/colibri-text-black.svg'; 
import './styles.css';
import Menu from '../Menu';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    const closeMenu = () => {
        setIsMenuOpen(true);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if(isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return() => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return(
        <div className="navbar-container">
            <div className='navbar-links'>
                <a className="navbar-link">Servicios</a>
                <a className="navbar-link">Galeria</a>
                <a   className="navbar-link">Contacto</a>
                <a className="navbar-link date-link">Agendar</a>
            </div>
            <button 
            onClick={toggleMenu}
            aria-label='toggle menu'
            >
                    <div 
                    className={`menu-icon ${isMenuOpen ? 'menu-icon-open' : 'menu-icon'}`}>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </button>
            {/* Passing close menu function as a prop to the menu component */}
            <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <Link to="/">
            <img src={colibriText} alt=""  className='colibri-text-navbar-icon'/>
            <img src={colibriTextBlack} alt="" className='colibri-text-navbar-icon-black'/>
            </Link>
            <div className='spacer-navbar'></div>
        </div>
    )
};

export default Navbar;