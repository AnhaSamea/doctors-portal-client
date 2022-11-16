import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import CardDetails from './CardDetails';

const Card = () => {
    const cards = [
        {
            id: 1,
            title: 'Opening Hours',
            details: '9am to 9pm, Sat-Thu',
            img : clock,
            bg: 'bg-gradient-to-r from-teal-400 to-cyan-400'
        },
        {
            id: 2,
            title: 'Visit Our Location',
            details: 'Brooklyn, NY 10036, United States.',
            img: marker,
            bg: 'bg-gradient-to-r from-slate-500 to-slate-400'
        },
        {
            id: 3,
            title: 'Contact Us Now',
            details: '+8801234567891',
            img: phone,
            bg: 'bg-gradient-to-r from-teal-400 to-cyan-400'
        },
    ]
    return (
        <div className='grid sm:grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
            {
                cards.map(card=> <CardDetails key={card.id} card={card}></CardDetails>)
            }


        </div>
    );
};

export default Card;