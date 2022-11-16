import React from 'react';
import ServiceCard from '../../Services/ServiceCards/ServiceCard';
import MakeAppointment from '../Appointmnet/MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Card from '../InfoCards/Card';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <ServiceCard></ServiceCard>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;