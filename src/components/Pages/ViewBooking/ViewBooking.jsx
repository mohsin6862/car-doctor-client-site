import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import BookingsTable from './BookingsTable';


const ViewBooking = () => {
    const { user } = useContext(AuthContext)
    const [allBooking, setAllBooking] = useState()
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllBooking(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Total Bookings {allBooking?.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                    {
                        allBooking.map(book => <BookingsTable
                        key={book._id} book={book}
                        >

                        </BookingsTable>)
                    }
                       
                      
                    </tbody>
           

                </table>
            </div>
        </div>
    );
};

export default ViewBooking;