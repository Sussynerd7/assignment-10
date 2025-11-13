import React from 'react';
import { FaPlusSquare, FaEdit, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <div className="py-16 px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Food Sharing Process</h2>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                
                <div className="flex-1 p-6 border-2 border-gray-200 rounded-xl bg-white shadow-md">
                    <FaPlusSquare className="text-4xl text-[#34533f] mb-3" />
                    <h3 className="text-xl font-semibold mb-2">1. Create Food Post</h3>
                    <p className="text-gray-600">
                        In the **Add Food** section, fill in the details about your surplus food (image, capacity, location, expiry). This creates a new listing.
                    </p>
                </div>

                <div className="flex-1 p-6 border-2 border-gray-200 rounded-xl bg-white shadow-md">
                    <FaEdit className="text-4xl text-[#34533f] mb-3" />
                    <h3 className="text-xl font-semibold mb-2">2. Manage & Update</h3>
                    <p className="text-gray-600">
                        View all your posted foods in your **Manage My Foods** dashboard. Here, you can easily **Update** or **Delete** any listing.
                    </p>
                </div>

                <div className="flex-1 p-6 border-2 border-gray-200 rounded-xl bg-white shadow-md">
                    <FaHandshake className="text-4xl text-[#34533f] mb-3" />
                    <h3 className="text-xl font-semibold mb-2">3. Request Food</h3>
                    <p className="text-gray-600">
                        Click **View More** on any food card, then select the **Request Food** button on the details page to initiate the request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;