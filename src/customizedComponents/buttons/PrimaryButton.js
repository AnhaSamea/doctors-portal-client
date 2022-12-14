import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-secondary to-primary btn text-white">{children}</button>
    );
};

export default PrimaryButton;