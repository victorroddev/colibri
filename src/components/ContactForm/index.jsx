import './styles.css';
import contactImg from '../../img/contact-img.webp';

const ContactForm = () => {
    return(
        <div className="contact-container">
            <h3 className="title">¡Hablemos de <span>tu Evento</span>!</h3>
            <p className='paragraph contact-paragraph'>Envíanos tu mensaje.</p>
            <div className='contact-items'>
                <form action="">
                    <div className='form-int-div'>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" 
                        id='name'
                        placeholder='Nombre'
                        />
                    </div>
                    <div className='form-int-div'>
                        <label htmlFor="phone">Número de teléfono.</label>
                        <input type="tel"  id="phone" placeholder='Número de teléfono.' />
                    </div>
                    <div className='form-int-div'>
                        <label htmlFor="message">Tu Mensaje</label>
                        <textarea name="" id="message" placeholder='Tu Mensaje' rows='7'></textarea>
                    </div>
                    <button type='sumbit'>
                        Enviar
                    </button>
                </form>
                <img src={contactImg} alt="" className='contact-img'/>
            </div>


        </div>
    )

}


export default ContactForm;
