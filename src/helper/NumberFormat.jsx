import React from 'react';

const NumberFormat = ({ Price }) => {
    return Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3,
        style: 'currency',
        currency: 'INR',
    }).format(Price);
};

export default NumberFormat;
