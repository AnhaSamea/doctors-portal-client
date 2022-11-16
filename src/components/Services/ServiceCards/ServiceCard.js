import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import ServiceCardDetails from './ServiceCardDetails';

const ServiceCard = () => {
    const serviceCards = [
        {
            id: 1,
            img: img1,
            title: 'Flouride Treatment',
            details: 'Fluoride treatments are a great way to prevent more cavities in patients who are already prone to them.'
        },
        {
            id: 2,
            img: img2,
            title: 'Cavity Filling',
            details: 'To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material was removed.'
        },
        {
            id: 3,
            img: img3,
            title: 'Teeth Whitening',
            details: 'Teeth whitening involves bleaching your teeth to make them lighter. It can not make your teeth brilliant white, but it can lighten the existing colour by several shades.'
        },
    ]
    return (
        <div className='py-8'>
            <p className='text-xl font-bold text-center text-primary'>Our Services</p>
            <h1 className='text-3xl py-3 text-center mb-8'>Services We Provide</h1>  
            <div className='grid sm:grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
               serviceCards.map(serviceCard=> <ServiceCardDetails key={serviceCard.id} serviceCard={serviceCard}></ServiceCardDetails>) 
            }
            </div>
        </div>
    );
};

export default ServiceCard;