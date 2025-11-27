import { BsPlus } from "react-icons/bs";
import './styles.css';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const faqData = [
    {
        id: 1,
        question: '¿Qué tipos de eventos organizan?',
        answer: 'Eventos corporativos, conmemorativos, inaguraciones, etc.'
    },
    {
        id: 2,
        question: '¿En qué ciudades  operan?',
        answer: 'En Ciudad Juárez Chihuahua.',
    },
    {
        id: 3,
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Efectivo, transferencia, tarjeta',        
    }
];

const FaqItem = ({item, isOpen, onClick}) => {
    const answerRef = useRef(null);

    useGSAP(() => {
        if(isOpen) {
            gsap.to(answerRef.current, {
                height: 'auto',
                opacity: 1,
                paddingTop: '1rem',
                paddingBottom: '1.5rem',
                duration: 0.4,
                ease: 'power2.inOut'
            });
        } else {
            gsap.to(answerRef.current, {
                height: 0,
                opacity: 0,
                paddingTop: 0,
                paddingBottom: 0,
                duration: 0.4,
                ease: 'power2.inOut'
            });
        }
    }, [isOpen]);

    return(
        <div className="faq-item">
            <button className={`faq-question ${isOpen ? 'open' : ''}`} onClick={onClick}>
                <BsPlus  className="spacer"/>
                {item.question}
                <BsPlus  className={`question-icon ${isOpen ? 'open' : ''}`}/>
            </button>
            <div className="faq-answer-container" ref={answerRef}>
                <p>{item.answer}</p>
            </div>
        </div>
    )
}



const Faq = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null: id);
    };

    return(
        <div className="faq-container">
            <h3  className="title">¿Tienes <span>Preguntas</span>?</h3>
            <p className="paragraph paragraph-faq">Nosotros las respondemos</p>
            <div className="faq-accordion">
                {faqData.map(item => (
                    <FaqItem 
                        key={item.id}
                        item={item}
                        isOpen={openId === item.id}
                        onClick={() => handleToggle(item.id)}
                    />
                ))}
            </div>
        </div>
    )
};

export default Faq;