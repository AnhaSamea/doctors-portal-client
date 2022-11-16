import React from 'react';
import img from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../customizedComponents/buttons/PrimaryButton';
const DentalCare = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row py-12">
    <img src={img} className="lg:w-2/6 rounded-lg shadow-2xl" alt=''/>
    <div className='px-20'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default DentalCare;