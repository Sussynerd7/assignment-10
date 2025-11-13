import React, { useEffect, useState } from 'react';
import { useAuth } from '../Authprovider/CustomAuthhook';
import api from '../Api/Api';
import { toast } from 'react-toastify'; 

const Myrequest = () => {
    const { user } = useAuth();
    const [requestedfoods, setRequestedfood] = useState([]);
    const [load, setload] = useState(true);
    
    const pendingRequests = requestedfoods.filter(requestedfoo => requestedfoo.reqstatus === "Pending");
    
    const fetchRequests = () => {
        setload(true);
        if (user?.email) {
            api.get(`/requestedfoods/${user.email}`)
                .then(res => {
                    setRequestedfood(res.data);
                })
                .catch(err => {
                    console.error("Error fetching requested foods:", err);
                })
                .finally(() => {
                    setload(false);
                });
        } else {
            setload(false);
        }
    };
    
    useEffect(() => {
        fetchRequests();
    }, [user]);

    const handleStatusUpdate = async (id, newStatus,status) => {
        try {
            const response = await api.patch(`/updaterequeststatus/${id}`, { status,newStatus });
            
            if (response.data.success) {
                if (newStatus === 'accepted') {
                    toast.success("Request accepted successfully! 🎉");
                } else if (newStatus === 'rejected') {
                    toast.success("Request rejected. 🚫");
                }
                fetchRequests();
            } else {
                toast.error(`Failed to update status: ${response.data.message}`);
            }
        } catch (error) {
            console.error("Failed to update status:", error);
            toast.error("An unexpected error occurred during the update.");
        }
    };

    if (load) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner w-12 text-blue-500"></span>
            </div>
        );
    }

    return (
        <div className='p-6'>
<title>My request</title>
            
            <h1 className='text-3xl font-bold mb-6'>Pending Food Requests (if you will reject/accept the status will be updated)</h1>
            {pendingRequests.length === 0 ? (
                <p>No new pending requests found for your contributed items.</p>
            ) : (
                <div className='space-y-4'>
                    {pendingRequests.map(food => (
                        <div key={food._id} className="border p-4 mb-2 shadow-md rounded-lg">
                            <p className="font-semibold text-xl mb-1">{food.title} was requested</p>
                            <p className="text-gray-600">Requested by: <span className='font-medium'>{food.requestername}</span></p>
                            <p className="text-gray-600">Request Status: <span className={`font-bold ${food.reqstatus === 'accepted' ? 'text-green-600' : food.reqstatus === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>{food.reqstatus || 'pending'}</span></p>
                            <div className='space-x-4 mt-4'>
                                <button 
                                    onClick={() => handleStatusUpdate(food._id, 'accepted','donated')}
                                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                >
                                    Accept
                                </button>
                                <button 
                                    onClick={() => handleStatusUpdate(food._id, 'rejected','pending')}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Myrequest;