import React from 'react';
import {Link} from 'react-router-dom'
import doctor from '../../../../assets/images/doctor-small.png'
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../customizedComponents/buttons/PrimaryButton';
const MakeAppointment = () => {
    return (
        <div className="hero text-white" style= {{ 
            backgroundImage: `url(${appointment})` }} >
                
        <div className="hero-content flex-col lg:flex-row py-12">
          <img src={doctor} className="-mt-32 -mb-12 lg:w-1/2 hidden lg:block" alt=''/>
          <div className='px-20'>
          <p className='text-xl font-bold text-primary'>Appointment</p>
          <h1 className='text-3xl py-3  mb-8 text-white'>Make an appointment today</h1> 
            <p className="py-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <Link><PrimaryButton>Get Started</PrimaryButton></Link>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;