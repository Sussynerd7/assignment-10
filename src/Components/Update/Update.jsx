import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../../Api/Api';
import { toast, ToastContainer } from 'react-toastify';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const handleDelete = async () => {
  

  try {
    const response = await api.delete(`/deletefood/${id}`);
    if (response.data.success) {
      toast("✅ Food was deleted successfully");
      navigate('/')
    } else {
      toast("⚠️ " + response.data.message);
    }
  } catch (error) {
    console.error("Error deleting food:", error);
    toast("❌ Failed to delete food");
  }
};

    const [foodData, setFoodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoodDetails = async () => {
            try {
                const response = await api.get(`/updateinfo/${id}`); 
                setFoodData(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching food details:", err);
                setError("Failed to load food details.");
                setLoading(false);
            }
        };

        if (id) {
            fetchFoodDetails();
        }
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><span className='loading loading-bars loading-xl'></span></div>;
    }

    if (error) {
        return <div className="text-center text-red-500 p-8">Error: {error}</div>;
    }

    // Destructure necessary fields for viewing
    const { 
        title, 
        imgurl, 
        capability, 
        pickupLocation, 
        expireDate, 
        description, 
        contributor, 
        contributorPhotoURL, 
        email, 
        status
    } = foodData || {};

    const statusColor = status === 'available' ? 'bg-green-600' : 'bg-yellow-600';
const handleupdate = async (e) => {
  e.preventDefault();

  const updatedFood = {
    title: e.target.newtitle.value,
    imgurl: e.target.newimgurl.value,
    capability: e.target.newcapability.value,
    pickupLocation: e.target.newpickupLocation.value,
    expireDate: e.target.newexpireDate.value,
    description: e.target.newdescription.value,
    contributor: e.target.newcontributor.value,
    contributorPhotoURL: e.target.newcontributorPhotoURL.value,
    email: e.target.newemail.value,
    status: e.target.newstatus.value,
  };

  try {
    const response = await api.patch(`/updatefood/${id}`, updatedFood);
    if (response.data.success) {
      toast("✅ Food updated successfully!");
    } else {
      toast("⚠️ " + response.data.message);
    }
  } catch (error) {
    console.error("Error updating food:", error);
    toast("❌ Failed to update food.");
  }
};

    return (
        <div className="container mx-auto p-4 max-w-4xl">
<title>Update food</title>

            <ToastContainer/>
            <header className="flex justify-between items-center pb-4 border-b border-gray-300 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Food Details: {title}
                </h1>
                <span className={`px-3 py-1 text-[15px] font-semibold text-white rounded ${statusColor}`}>
                    {status}
                </span>
            </header>

            <div className="md:flex md:space-x-8">
                
                <div className="md:w-1/3 space-y-6 mb-6 md:mb-0">
                    
                    <div className="border border-gray-200 p-2">
                        <img 
                            src={imgurl || 'https://via.placeholder.com/400'} 
                            alt={title} 
                            className="w-full h-[223px] object-cover"
                        />
                    </div>

                    <div className="p-4 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Contributor</h3>
                        <div className="flex items-center space-x-3">
                            <img 
                                src={contributorPhotoURL} 
                                alt={contributor} 
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium text-gray-800">{contributor}</p>
                                <p className="text-sm text-gray-500">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 p-4 border border-gray-200">
                    
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Item Information</h2>
                    
                    <div className="grid grid-cols-2 gap-y-4 mb-6 text-gray-700">
                        {/* Quantity */}
                        <div>
                            <p className="text-sm text-gray-500">Quantity (Capability)</p>
                            <p className="text-base font-semibold">{capability}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Expiry Date</p>
                            <p className="text-base font-semibold">{expireDate}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm text-gray-500">Pickup Location</p>
                            <p className="text-base font-semibold">{pickupLocation}</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <button onClick={handleDelete}
                        className="mt-6 w-full py-2 text-white bg-red-600 hover:bg-red-700 font-medium rounded transition duration-150"
                    >
                       delete this
                    </button>
                </div>
            </div>


            <div className="">
                <form action="" className='flex mx-auto flex-col space-y-3 border-2 broder-secondary  bg-[#f7ebd3] my-5 p-10 rounded-xl' onSubmit={handleupdate}>


<label htmlFor="">title</label>
<input type="text" defaultValue={title} name='newtitle' className="input w-full" />
<label htmlFor="">imgurl</label>
<input type="text" defaultValue={imgurl} name='newimgurl' className="input w-full" />
<label htmlFor="">capability</label>
<input type="text" defaultValue={capability} name='newcapability' className="input w-full" />
<label htmlFor="">pickupLocation</label>
<input type="text" defaultValue={pickupLocation} name='newpickupLocation' className="input w-full" />
<label htmlFor="">expireDate</label>
<input type="text" defaultValue={expireDate} name='newexpireDate' className="input w-full" />
<label htmlFor="">description</label>
<input type="text" defaultValue={description} name='newdescription' className="input w-full" />
<label htmlFor="">contributor</label>
<input type="text" defaultValue={contributor} name='newcontributor' className="input w-full" />
<label htmlFor="">contributorPhotoURL</label>
<input type="text" defaultValue={contributorPhotoURL} name='newcontributorPhotoURL' className="input w-full" />
<label htmlFor="">email</label>
<input type="text" defaultValue={email} name='newemail' className="input w-full" />
<label htmlFor="">status</label>
<input type="text" readOnly defaultValue={" status only changes on request placings"} name='newstatus' className="input w-full" />

<button className="btn bg-primary w-full text-white font-semibold">Change the data</button>
                </form>
            </div>
        </div>
    );
};

export default Update;




// title
// imgurl
// capability
// pickupLocation
// expireDate
// description
// contributor
// contributorPhotoURL
// email
// status

