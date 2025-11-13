import React from 'react';
import api from '../Api/Api';
import { useAuth } from '../Authprovider/CustomAuthhook';
import { toast, ToastContainer } from 'react-toastify';
// import api from '../../Api/Api';

const Create = () => {
    const {user,accessToken} = useAuth()
    // console.log(user)
    const handlecreatefood = async (e) => {
        e.preventDefault();
        
// title
// "Classic Neapolitan Pizza"
// imgurl
// "https://i.ibb.co.com/dwkDVHpc/Gemini-Generated-Image-dpw86ddpw86ddpw8.…"
// capability
// 2
// pickupLocation
// "Gulshan 1, Dhaka"
// expireDate
// "2025-11-12"
// description
// "The Neapolitan Pizza, or Pizza Napoletana, is a true culinary icon ori…"
// contributorPhotoURL
// "https://i.ibb.co.com/xtwy1Qqw/Screenshot-2025-11-10-212634.png"
// email
// "shakib.food@example.com"
        const foddata = e.target.elements;
       
        const formData = {
            title: foddata.name.value,
            imgurl: foddata.photoURL.value,
            capability: foddata.capability.value,
            pickupLocation:foddata.location.value,
            expireDate: foddata.expdate.value,
            description: foddata.extranote.value,
            contributorPhotoURL: user.photoURL,
            email:user.email,
            contributor: user.displayName,
            status:'available',
        };

        try {
            const response = await api.post('/create', formData);
            console.log('Food item created:', response.data);
             toast("Posted new food")
           
           
        } catch (error) {
            console.error( error);
            
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4 md:p-8">
<title>Add Food</title>

           <ToastContainer/>
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Food Item</h2>
            <form onSubmit={handlecreatefood}>
                <fieldset className='form space-y-4'>
                    <div>
                        <label className="text-sm font-medium text-secondary mb-1">Food Name</label>
                        <input name='name' type="text" placeholder='' className="input input-bordered w-full p-2 border rounded" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-secondary mb-1">Photo URL</label>
                        <input name='photoURL' type="url" placeholder='' className="input input-bordered w-full p-2 border rounded" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-secondary mb-1">How many people eat</label>
                        <input name='capability' type="number" placeholder='' className="input input-bordered w-full p-2 border rounded" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-secondary mb-1">Pickup Location</label>
                        <input name='location' type="text" placeholder='' className="input input-bordered w-full p-2 border rounded" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-secondary mb-1">Expiration Date</label>
                        <input name='expdate' type="date" className="input input-bordered w-full p-2 border rounded" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-secondary mb-1">Extra Note</label>
                        <textarea name='extranote' placeholder='' className="textarea textarea-bordered w-full p-2 border rounded" rows="3"></textarea>
                    </div>
                </fieldset>
                
                <button type='submit' className="btn w-full mt-6 bg-[#ef451c] text-white py-2 rounded hover:bg-[#d9400f]">Create Food</button>
            </form>
        </div>
    );
};

export default Create;