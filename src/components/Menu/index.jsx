
import './styles.css';

const Menu = ({isMenuOpen, closeMenu }) => {
    return(
        <div className={`menu ${isMenuOpen ? 'menu-visible' : 'menu'}`}>
            <a href="" 
            onClick={closeMenu} 
            className="menu-link">Servicios</a>
            <a href="" onClick={closeMenu} className="menu-link">Galeria</a>
            <a href="" onClick={closeMenu} className="menu-link">Contacto</a>
            <a href="" onClick={closeMenu} className="menu-link">Agendar</a>            
        </div>
    )
};

export default Menu;