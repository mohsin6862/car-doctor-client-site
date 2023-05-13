import React from 'react';
import { FaCalendar, FaLandmark, FaLocationArrow, FaPhone, FaPhoneAlt } from 'react-icons/fa';

const Location = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content my-20 rounded">
        <div className='text-white flex items-center'>
            <div className='text-3xl'>
                <FaCalendar ></FaCalendar>
            </div>
            <div>
          <p className='text-xl'>We are open monday-friday</p>

          <h1 className='text-3xl font-semibold'>7:00 am - 9:00 pm</h1>
            </div>
         
        </div> 
        <div className='text-white flex items-center'>
            <div className='text-3xl'>
                <FaPhoneAlt ></FaPhoneAlt>
            </div>
            <div>
          <p className='text-xl'>Have a question?</p>

          <h1 className='text-3xl font-semibold'>+2546 251 2658</h1>
            </div>
         
        </div> 

        <div className='text-white flex items-center'>
            <div className='text-3xl'>
                <FaLandmark ></FaLandmark>
            </div>
            <div>
          <p className='text-xl'>Need a repair? our address</p>

          <h1 className='text-3xl font-semibold'>Liza Street, New York</h1>
            </div>
         
        </div> 
      </footer>
    );
};

export default Location;