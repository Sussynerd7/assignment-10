import React, { useState, useEffect } from 'react';
import api from '../../Api/Api';
import { useParams } from 'react-router';
import { useAuth } from '../../Authprovider/CustomAuthhook';
import { toast } from 'react-toastify';

const Details = () => {
    const [details, setDetails] = useState(null);
    const { id } = useParams();
    const { user } = useAuth();
    const accessToken = user.accessToken;
     const hanldeform=(e)=>{
 
e.preventDefault()
 const contact = e.target.contact.value;
 const reqlocation = e.target.reqlocation.value;
 const reqreason = e.target.reqreason.value;
 const reqstatus = e.target.reqstatus.value

 const handleRequestFood = async () => {
        if (!user || !id) {
             toast.error("Error: User or Food ID is missing.");
             return;
        }

        const updatedinfo = {
            status: "pending",
            requestername: user.displayName,
            requesterimg: user.photoURL,
            requestedfoodid: id,
            contact:contact,
           reqlocation:reqlocation,
              reqreason:reqreason,
              reqstatus:reqstatus
             
            
            
        };

        try {
            await api.patch(`/request/${id}`, updatedinfo);
            
            setDetails(prevDetails => ({
                ...prevDetails,
                status: "pending"
            }));

            toast('Status updated to PENDING.');

        } catch (error) {
            console.error("Error :", error);
            toast.error("Failed ");
        }
    };

     handleRequestFood();
     }
    // console.log(user);

    useEffect(() => {
        if (!id) return;

        const fetchDetails = async () => {
            try {
                const response = await api.get(`/details/${id}`,{
                    headers:{
                        "authorization" : `bearer ${accessToken}`
                    }
                });
                setDetails(response.data);

            } catch (err) {
                console.log(err);
            }
        };

        fetchDetails();
    }, [id,accessToken]);

    if (!details) {
        return <div className="text-center p-8 text-lg font-medium">Loading details...</div>;
    }

    const { 
        title,
        contributor, 
        imgurl,
        capability, 
        pickupLocation, 
        expireDate, 
        description,
        contributorPhotoURL,
        email, 
    } = details;
    
    // const handleRequestFood = async () => {
    //     if (!user || !id) {
    //          toast.error("Error: User or Food ID is missing.");
    //          return;
    //     }

    //     const updatedinfo = {
    //         status: "pending",
    //         requestername: user.displayName,
    //         requesterimg: user.photoURL,
    //         requestedfoodid: id,
            
    //     };

    //     try {
    //         await api.patch(`/request/${id}`, updatedinfo);
            
    //         setDetails(prevDetails => ({
    //             ...prevDetails,
    //             status: "pending"
    //         }));

    //         toast('Status updated to PENDING.');

    //     } catch (error) {
    //         console.error("Error :", error);
    //         toast.error("Failed ");
    //     }
    // };
    
    const isRequested = details.status === 'pending';
    
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">

            <div className="md:flex md:space-x-8">

                <div className="flex-shrink-0 mb-6 md:mb-0 w-full md:w-96">
                    <img
                        src={imgurl || 'https://via.placeholder.com/400x400?text=No+Image'}
                        alt={title}
                        className="w-full md:w-96 h-96 object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="flex-grow">
                    <h1 className="text-3xl font-bold mb-2 border-b pb-2">{title}</h1>

                    <div className="mb-6">
                        <p className="text-gray-600 mb-2">
                            Can Serves: <strong>{capability}</strong> people
                        </p>
                        
                        {email && (
                            <p className="text-gray-600 mb-2">
                                <strong>Contributor Email:</strong> {email}
                            </p>
                        )}
                        <p className="text-gray-600 mb-2">
                            <strong>Contributor:</strong> {contributor}
                        </p>
                        {contributorPhotoURL && (
                            <div className="flex items-center mb-2">
                                <strong>Contributor:</strong> 
                                <img src={contributorPhotoURL} alt="Contributor" className="w-8 h-8 rounded-full ml-2" />
                            </div>
                        )}
                        
                        <p className="text-gray-600 mb-2">
                            <strong>Pick Up At:</strong> {pickupLocation}
                        </p>
                        
                        <p className="text-gray-600 mb-2 font-bold text-red-600">
                            <strong>Expires:</strong> {expireDate}
                        </p>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn w-full bg-primary text-white font-semibold " onClick={()=>document.getElementById('my_modal_2').showModal()}>Request</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  <form onSubmit={hanldeform} className="flex flex-col items-center p-4 bg-white mx-auto max-w-lg shadow-md rounded-lg" action="">
    
    <label htmlFor="reqlocation" className="text-gray-700 font-semibold mt-4 self-start w-full">
        Location
    </label>
    <input 
        name='reqlocation' 
        type="text" 
        placeholder='e.g., City, District' 
        className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" 
    />
    
    <label htmlFor="reqreason" className="text-gray-700 font-semibold mt-4 self-start w-full">
        Reason
    </label>
    <textarea 
        name='reqreason' 
        placeholder='Why are you requesting this food?' 
        className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" 
        rows="3"
    />
    
    <label htmlFor="contact" className="text-gray-700 font-semibold mt-4 self-start w-full">
        Contact
    </label>
    <input 
        name='contact' 
        type="text" 
        placeholder='Your phone number or best contact' 
        className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" 
    />
    
    <label htmlFor="reqstatus" className="text-gray-700 font-semibold mt-4 self-start w-full">
        Status
    </label>
    <input 
        name='reqstatus' 
        readOnly 
        defaultValue={"Pending"} 
        type="text" 
        placeholder='Status will be Pending' 
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed mt-1" 
    />


    <button
        type="submit"
        disabled={isRequested || !user} 
        className={`w-full py-2 mt-6 font-semibold rounded-md transition duration-150 ${
            isRequested || !user 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-yellow-700'
        }`}
    >
        {isRequested ? 'Request Pending' : 'Request Food'}
    </button>
</form>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

                        
                        
                        {isRequested && (
                             <p className="mt-2 text-sm text-orange-500 font-semibold">
                                 This food item has been requested.
                             </p>
                        )}
                        {!user && (
                            <p className="mt-2 text-sm text-red-500">
                                Please log in to request food.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-semibold mb-3">About the Dish</h2>
                <p className="text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default Details;