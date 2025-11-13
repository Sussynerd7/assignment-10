import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router';
// import api from '../../Api/Api';
import { useAuth } from '../../Authprovider/CustomAuthhook';

const Foodcards = ({ food }) => {

    const {user} = useAuth();
    const { 
        title, 
        imgurl,
        capability, 
        pickupLocation, 
        expireDate, 
            
        contributor,          
        _id 
    } = food;

    return (
        <div>
            <div className="card lg:h-[450px] h-[400px] bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full h-48 object-cover'
                        src={imgurl}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                   <p className="text-sm text-gray-500 mt-1">
                        By: {contributor}
                    </p>
                    
                    <p className="text-sm text-gray-500 mt-1">
                        Serves: {capability}
                    </p>
                    
                    <p className="text-sm text-gray-500">
                        Pickup: {pickupLocation}
                    </p>
                    <p className="text-sm font-semibold text-red-600">
                        Expires: {expireDate}
                    </p>
                    <div className="card-actions px-[2px] justify-between items-center mt-2">
                        <Link to={user? `/food/${_id}`: 'auth/login'}>
                            <button className=" bg-[#ef451c] btn text-white">View more
                            </button>   
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcards;