import React from 'react';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import TestimonialDetails from './TestimonialDetails';


const Testimonial = () => {
    const cards = [
        {
            id: 1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Harry',
            location : 'California',
            img: img1
        },
        {
            id: 2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Samuel Leo',
            location : 'Los Angeles',
            img: img2
        },
        {
            id: 3,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Robert Alberto',
            location : 'Chicago',
            img: img3
        },
    ]
    return (
        <div className='py-8'>
            <p className='text-xl font-bold  text-primary'>Testimonial</p>
            <h1 className='text-3xl py-3  mb-8'>What Our Patients Says</h1> 
            <div className='grid sm:grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
           {
            cards.map(card=> <TestimonialDetails key={card.id} card={card}></TestimonialDetails>)
           }
        </div>
        </div>
    );
};

export default Testimonial;
