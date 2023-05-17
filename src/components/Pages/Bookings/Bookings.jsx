import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Bookings = () => {
    const {user}= useContext(AuthContext);
    const bookings = useLoaderData()
    const {_id,img,title,price}=bookings
    console.log(bookings)
    const handleOrderConfirm = event=>{
      
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const date = form.date.value;
       const email= form.email.value;
       const confirmOrder ={
        name:name,date:date,email:email,img,service:title,service_id:_id,price
       }
       fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(confirmOrder)
       })
       .then(res=> res.json())
       .then (data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'Order Successful',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
       })
       console.log(confirmOrder)


    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Please Book {bookings?.title}</h1>

                        <form onSubmit={handleOrderConfirm}>
                       
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text"  placeholder="Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" />
                                
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
                              
                            </div>
                            </div>
                            <div className="form-control mt-6">
                    
                                <input  className="btn btn-primary btn-block" type="submit" value="Confirm Order" />
                            </div>
                      
                        </form>
                    </div>
           
    );
};

export default Bookings;