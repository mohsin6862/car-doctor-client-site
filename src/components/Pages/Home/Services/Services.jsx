import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(()=>{
        fetch('/public/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (

        <div>
            <div className='text-center mt-8 space-y-5'>
                <h1 className='text-3xl font-semibold text-[#FF3811]'>Service</h1>
                <h1 className='text-5xl'>Our Service Area</h1>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='mt-20 grid grid-cols-3 gap-10'>

                
                   {
                    services?.map(service=> <Service key={service._id} service={service }></Service>)
                   }
                
                


            </div>
            <div className='text-center my-5 '>
                <button className="btn btn-outline btn-secondary">More Service</button>
                </div>
        </div>

    );
};

export default Services;