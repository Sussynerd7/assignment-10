import React, { useEffect, useState } from 'react';
import { useAuth } from '../Authprovider/CustomAuthhook';
import api from '../Api/Api';
// import api from '../../Api/Api';

const Myrequest = () => {
    const { user } = useAuth();
    const [requestedfood, setRequestedfood] = useState([]);
    
    useEffect(() => {
        if (user?.email) {
            api.get(`/requestedfoods/${user.email}`)
                .then(res => {
                    setRequestedfood(res.data);
                })
                .catch(err => {
                    console.error("Error fetching requested foods:", err);
                });
        }
    }, [user]);

    console.log(requestedfood);

    return (
        <div className='p-6'>
            <h1 className='text-3xl font-bold mb-6'>My Requested Foods</h1>
            {requestedfood.length === 0 ? (
                <p>No requests found for your contributed items.</p>
            ) : (
                <div>
                    Map over requestedfood here to display cards or list items
                    {requestedfood.map(food => (
                        <div key={food._id} className="border p-4 mb-2">
                            <p className="font-semibold">{food.title}</p>
                            <p>Requested by: {food.requestername}</p>
                            <p>Status: {food.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Myrequest;