import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Bookings = () => {
    const {user}= useContext(AuthContext);
    const bookings = useLoaderData()
    console.log(bookings)
    const handleOrderConfirm = event=>{
      
       event.preventDefault();
       const form = event.target;
       const name= form.name.value;
       const date= form.date.value;
       const email= form.email.value;
       const confirmOrder ={
        name:name,date:date,email:email
       }
       console.log(confirmOrder)


    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Please Book {bookings?.title}</h1>

                        <form onSubmit={handleOrderConfirm}>
                        <div className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} placeholder="Your Name" name='date' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date'  className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" readOnly defaultValue={'$'+bookings?.price} className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            </div>
                            <div className="form-control mt-6">
                    
                                <input  className="btn btn-primary btn-block" type="submit" value="Confirm Order" />
                            </div>
                        </div>
                        </form>
                    </div>
           
    );
};

export default Bookings;