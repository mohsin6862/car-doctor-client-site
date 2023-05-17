import React from 'react';

const BookingsTable = ({book}) => {
    const {img,service,price,date,email}=book;
    return (
   
                <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
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
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
       
    );
};

export default BookingsTable;