import React from 'react';
import { FaHeart, FaHandsHelping, FaSeedling } from 'react-icons/fa';

const OurMission = () => {
    return (
        <div className="py-16 px-4 bg-white shadow-inner">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Mission</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center p-6 bg-orange-50 rounded-xl shadow-lg transition duration-300 hover:shadow-xl">
                    <FaHandsHelping className="text-5xl text-[#ef451c] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Community First</h3>
                    <p className="text-gray-600">
                        Connecting those who have extra food with neighbors in need, fostering stronger local bonds and support networks.
                    </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl shadow-lg transition duration-300 hover:shadow-xl">
                    <FaSeedling className="text-5xl text-[#ef451c] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Zero Waste</h3>
                    <p className="text-gray-600">
                        Pioneering efforts to dramatically reduce food waste by ensuring every edible surplus item finds a new home.
                    </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl shadow-lg transition duration-300 hover:shadow-xl">
                    <FaHeart className="text-5xl text-[#ef451c] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Shared Generosity</h3>
                    <p className="text-gray-600">
                        Building a platform powered by kindness, where every contribution helps a family, a student, or an individual.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;