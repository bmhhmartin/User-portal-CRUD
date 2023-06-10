import React from 'react';
import loader from '../../assets/images/loader.svg';

const Loader = () => {
    return (
        <div className='text-center'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loader;