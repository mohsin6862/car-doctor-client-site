import React from 'react';
import {  FaArrowRight,} from "react-icons/fa";

const Service = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-96 bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className=" flex">
                    <p className='text-[#FF3811]'>Price: {price}</p>
                    <button className="btn btn-circle bg-[#FF3811]">
                        <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;