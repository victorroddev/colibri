import './styles.css';
import StaffCard from './StaffCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LiaArrowRightSolid } from "react-icons/lia";
import { LiaArrowLeftSolid } from "react-icons/lia";

import { useRef } from 'react';

import dianaV from '../../img/staff/dianav.webp';

const Staff = ( ) => {
    const splideRef = useRef(null);


    const handlePrev = () => {
        if(splideRef) {
            splideRef.current.go('-')
        }
    };

    const handleNext = () =>{
        if(splideRef.current) {
            splideRef.current.go('+')
        }
    };


    return(
        <div className="staff-container">
            <h3 className="title-white">conoce al <span>equipo</span></h3>
            <p className='paragraph staff-subtitle'>Los creadores de experiencias</p>

            <div className='staff-items-container'>

                <Splide aria-label='Staff slider' ref={splideRef}
                    options ={{
                        perPage: 1,
                        rewind: true,
                        pagination: false,
                        arrows: false,
                        mediaQuery: 'min',
                        breakpoints:{
                            1024: {
                                perPage: 3
                            }
                        }
                    }}
                >   

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Diana Vazquez'
                        staffPosition='Creadora Creativa'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>
                    
                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Liliana Vázquez'
                        staffPosition='Creadora técnica'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Yatziri Vázquez'
                        staffPosition='Backdrops'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Luis Vázquez'
                        staffPosition='Coordinador de montaje y serigrafía'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Jorge Vázquez'
                        staffPosition='Traslado y montaje'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Juan Rentería'
                        staffPosition='Montaje'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Rubén Rentería'
                        staffPosition='Mantenimiento '
                        staffImg = {dianaV}
                    />

                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'María Cervantes'
                        staffPosition='Charcutería, decoración y organización'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>

                    <SplideSlide>
                        <StaffCard 
                        staffName= 'Jaqueline Vega'
                        staffPosition='Atención al cliente'
                        staffImg = {dianaV}
                        />
                    </SplideSlide>


                </Splide>
                
                <div className='splide-controls'>
                    <button
                        onClick={handlePrev}
                        className='custom-arrow prev-arrow'
                        aria-label='anterior'
                    >   <LiaArrowLeftSolid />
                    </button>

                    <button
                        onClick={handleNext}
                        className='custom-arrow next-arrow'
                        aria-label='siguiente'
                    >   <LiaArrowRightSolid />
                    </button>
                </div>
                


            </div>

        </div>
    )
};

export default Staff;