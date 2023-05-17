import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import BookingsTable from './BookingsTable';
import Swal from 'sweetalert2';


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
    }, []);
    const handleDelete = (id)=>{
   
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{

                if(data.deletedCount>0){

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = allBooking?.filter(bk => bk._id !== id)
                      setAllBooking(remaining)
                }


            })
          
          }
        })

    }

    const handleConfirm = (id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method : 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify({status:'confirm'})
            
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount >0){
                const remaining = allBooking.filter(bk => bk._id !== id);
                const updated = allBooking.find(bk => bk._id === id)
                updated.status='confirm'
                const newConfirmBooking = [updated , ...remaining]
                setAllBooking(newConfirmBooking)
            }
        })
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-8'>Total Bookings {allBooking?.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th></th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allBooking?.map(book => <BookingsTable
                                key={book._id} book={book} handleDelete={handleDelete} handleConfirm={handleConfirm}
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