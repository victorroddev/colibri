import '../../src/App.css';

import Hero from '../components/Hero';
import About from '../components/About';
import Eventos from '../components/Eventos';
import Clients from '../components/Clients';
import Schedule from '../components/Schedule';
import Staff from '../components/Staff';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return(
        <div>
            <Hero />
            <About />
            <Eventos />
            <Clients />
            <Schedule />
            <Staff />
            <Gallery />
            <Faq />
            <ContactForm />
        </div>
    )
};

export default HomePage