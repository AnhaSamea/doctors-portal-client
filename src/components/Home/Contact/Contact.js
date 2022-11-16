import React from 'react';
import PrimaryButton from '../../../customizedComponents/buttons/PrimaryButton';

const Contact = () => {
    return (
       <div style={{ 
        backgroundImage: `url("https://i.ibb.co/hfKQ6GW/appointment.png")` , backgroundSize: 'cover'
      }} className='mb-12'>
         <section className="p-6 ">
	<form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid">
    <p className='text-xl font-bold text-center text-primary'>Contact Us</p>
            <h1 className='text-3xl pb-3 text-center mb-8 text-white'>Stay connected with us</h1> 
		<div>
			
			<input id="email" type="text" name='email' placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-slate-400 " />
		</div>
		<div>
			
			<input id="name" type="text" name='name' placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-slate-400 " />
		</div>
		<div>
			
			<textarea id="message" type="text" name='message' placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-slate-400 "></textarea>
		</div>
		<div className='flex justify-center '>
        <PrimaryButton>Submit</PrimaryButton>
		</div>
	</form>
</section>
       </div>
    );
};

export default Contact;