import '../Hero/styles.css';
import colibriIconRight from '../../assets/svgs/right-icon.svg';
import colibriIconLeft from '../../assets/svgs/left-icon.svg'
import colibriIcon from '../../assets/svgs/colibri-icon-rose.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import arrow from '../../assets/svgs/arrow.svg';
import colibriIconOriginal from '../../assets/svgs/colibri-icon.svg';
import { Link } from 'react-router-dom';

const HeroComponent = (props) => {

    return(
        <>
        <section id="hero">
            <div className="hero-container">
                <div className='transparent'></div>
                <img src={colibriIconLeft} alt="" className='hero-colibri-icon hero-colibri-icon-left' />
                <div className='hero-texts'>
                    <img src={colibriIcon} alt=""  className='hero-icon'/>
                    <h2 className='hero-first-title'>{props.heroHomeTitle}</h2>
                    <h2 className='hero-second-title'>{props.heroHomeSecondTitle}</h2>
                    <p className='hero-third-title'>{props.heroThirdTitle}</p>
                    <div className='hero-ctas'>
                        <div className='rrss-buttons'>
                            <FaFacebookSquare />
                            <FaSquareInstagram  className='instagram-icon'/>
                        </div>
                        <Link to="/Services">
                            <button className='services-hero-button' >
                                {props.heroButton} 
                            <img src={arrow} alt="" />
                            </button>
                        </Link>

                    </div>
                </div>
                <img src={colibriIconRight} alt=""  className='hero-colibri-icon hero-colibri-icon-right '/>
            </div>

            <div className='hero-container-dekstop'>
                <div className='hero-desktop-texts'>
                    <p className='hero-desktop-text'>{props.heroHomeTitle}</p>
                    <p className='hero-desktop-text'>{props.heroHomeSecondTitle}</p>
                    <p className='hero-desktop-text'>{props.heroThirdTitle}</p>
                    <Link to='/Services'>
                    <button
                    className='services-hero-button-desktop'
                    >
                        {props.heroButton}
                    </button>
                    </Link>

                </div>

                <div className='hero-desktop-right'>
                    <div className='hero-desktop-img-container'></div>
                    <img src={colibriIconOriginal} alt=""  className='hero-desktop-icon'/>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default HeroComponent;