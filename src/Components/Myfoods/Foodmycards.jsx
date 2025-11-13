import React, { useState } from 'react';
import { Link } from 'react-router';
// const [foodData,setFoodData] = useState([])
const MinimalFoodCard = ({ food }) => {

    const [load ,setload] = useState(false)
    const { 
        title, 
        imgurl,
        expireDate, 
        status,
        _id ,
        capability,contributor,email,pickupLocation,available,
    } = food;

    
    // console.log(_id)
    const statusColor = status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center bg-white shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl border border-gray-100">
            
            <div className="w-full h-32 md:w-32 md:h-32 flex-shrink-0">
                <img 
                    className="w-full h-full object-cover" 
                    src={imgurl || 'https://placehold.co/128x128/f3f4f6/374151?text=Food'} 
                    alt={title} 
                />
            </div>

            <div className="p-4 flex-grow flex flex-col justify-center w-full md:w-auto">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1 mb-2">{title}</h3>
                
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                    
                    <div className="flex items-center text-sm">
                        <span className="font-semibold text-gray-500 mr-2">Expires:</span>
                        <span className="text-red-600 font-medium">{expireDate}</span>
                    </div>

                    <div className="flex items-center text-sm">
                        <span className="font-semibold text-gray-500 mr-2">Status:</span>
                        <span className={`px-3 py-0.5 rounded-full text-xs font-semibold uppercase ${statusColor}`}>
                            {status}
                        </span>
                    </div>
                </div>
                  <div className="p-4">
    <Link to={`/update/${_id}`}>
      <button className="btn btn-sm md:btn-md bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md transition duration-200">
     Want to update or delete?
      </button>
    </Link>
  </div>
            </div>
            
            
        </div>
    );
};

export default MinimalFoodCard;