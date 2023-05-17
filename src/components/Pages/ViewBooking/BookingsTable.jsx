

const BookingsTable = ({book,handleDelete,handleConfirm}) => {
    const {img,service,price,date,email,_id,status}=book;
   
    return (
   
                <tr>
                            <th>
                            <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="rounded w-28 h-28">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service}</div>
                                   
                                    </div>
                                </div>
                            </td>
                            <td>
                                {date}
                                <br />
                                <span className="badge badge-ghost badge-sm">{email}</span>
                            </td>
                            <td>{price}</td>
                            <th>
                               {
                                status==='confirm'? <span className="font-bold text-success">Confirmed</span> :
                               
                               <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
                            </th>
                        </tr>
       
    );
};

export default BookingsTable;