import React from 'react';
import Happy_user from '../assets/happy-user.PNG'
const Brand = () => {
    return (
        <div>
            <div className='w-full p-0'>
            <img src={Happy_user}
             className='w-full object-cover cursor-pointer'/>
            </div>
            
        </div>
    );
};

export default Brand;