
import './styles.css';

//import images
import valeoLogo from '../../assets/svgs/logos/valeo.png';
import honeywellLogo from '../../assets/svgs/logos/honeywell.png';
import jabilLogo from '../../assets/svgs/logos/jabil.png';


const Clients = () =>{
    return(
        <div>
            <h3 className='title'>ellos ya <span>confían</span> en nosotros</h3>
        <div className='clients'>
            <div className='shape'></div>
            <div className='logos-container'>
                <img src={valeoLogo} alt="Logo Valeos" className='client-logo'/>
                <img src={honeywellLogo} alt="Logo Valeos" className='client-logo'/>
                <img src={jabilLogo} alt="Logo Valeos" className='client-logo'/>
            </div>
        </div>
        </div>

    )
};


export default Clients;