
import './styles.css';
import Card from './Card';
import corporativeEvent from '../../img/corporativos.webp';
import certificationEvent from '../../img/certificaciones.webp';
import customizeEvent from '../../img/personalizados.webp';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Eventos = () => {
    return(
        <div className="eventos-container">
            <h3 className="title">Creando <span>momentos</span></h3>
            <p className='paragraph'>Planeación, diseño y detalles que enamoran</p>

            <div className='portraits-container'>
                <Splide aria-label="Services Slides"
                    options={{
                    perPage: 1,
                    rewind: true,
                    arrows: false,
                    pagination: false,
                    mediaQuery: 'min',
                    breakpoints: {
                        1024: {
                            perPage: 3
                        }
                    }
                }}
                >

                    <SplideSlide>
                    <Card 
                        image={corporativeEvent}
                        title='Eventos corporativos'

                    />
                    </SplideSlide>

                    <SplideSlide>
                    <Card 
                        image={certificationEvent}
                        title='Ceremonias de certificaciones'
                        />                       
                    </SplideSlide>
                    <SplideSlide>
                    <Card 
                        image={customizeEvent}
                        title='Eventos personalizados'
                        />                       
                    </SplideSlide>
                </Splide>
                <div className='eventos-line'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M0.44843047857284546,260.0896911621094C62.78026758631071,242.15247090657553,262.4813037614028,147.98206583658853,374.439453125,152.46636962890625C486.3976024885972,156.95067342122397,601.3453063964844,266.5171864827474,672.1973266601562,286.9955139160156C743.0493469238281,307.4738413492839,778.3258666992188,277.27953084309894,799.5515747070312,275.3363342285156" fill="none" stroke-width="5" stroke="url(&quot;#SvgjsLinearGradient1001&quot;)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(336, 100%, 50%)" offset="0"></stop><stop stop-color="hsl(336, 100%, 50%)" offset="1"></stop></linearGradient></defs></svg>
                </div>
            </div>


            
        </div>
    )
}

export default Eventos;