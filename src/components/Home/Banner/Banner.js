import React from 'react';
import Chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../customizedComponents/buttons/PrimaryButton';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-banner mb-12 mt-5 sm:mb-2 sm:mt-2">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='lg:w-1/2' src={Chair} alt='chair'/>
    <div className=''>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;
