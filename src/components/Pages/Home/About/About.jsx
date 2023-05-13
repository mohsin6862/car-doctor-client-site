import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
         <div className='w-1/2 relative'>
         <img src={person} className=" rounded-lg shadow-2xl w-3/4 " />
         <img src={parts} className="max-w-sm rounded-lg shadow-2xl absolute right-5 top-1/2 border-8  border-slate-500 " />
         </div>
          <div className='w-1/2'>
            <h1 className='text-xl font-semibold text-[#FF3811] mb-5'>About Us</h1>
            <h1 className="text-5xl font-bold mb-5">We are qualified & of experience in this field</h1>
            <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;