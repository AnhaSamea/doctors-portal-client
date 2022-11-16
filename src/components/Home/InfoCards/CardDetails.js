import React from 'react';

const CardDetails = ({card}) => {
    const {title,details,img,bg} = card;
    return (
        <div className={`w-full py-12 px-5 shadow-md lg:max-w-lg rounded-xl shadow-neutral-xl text-white ${bg}`}>
        <div className='flex justify-around'>
            <img src={img} alt="" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>
                <p className="">
                    {details}
                </p>
            </div>
        </div>
    </div>
    );
};

export default CardDetails;