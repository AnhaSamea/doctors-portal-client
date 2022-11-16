import React from 'react';

const ServiceCardDetails = ({serviceCard}) => {
    const {img,title,details} = serviceCard;
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded my-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title ">{title}</h2>
                <p className=''>{details}</p>

            </div>
        </div>
    );
};

export default ServiceCardDetails;