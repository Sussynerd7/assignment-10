import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
        <div className=" flex flex-col space-y-0 bg-gradient-to-r h-screen from-orange-50 to-amber-50 ">
            <div className="sticky top-0 z-50"><Navbar ></Navbar></div>
            
            <div className='flex-grow'><Outlet></Outlet></div>
            <div className=" bottom-0"> <Footer></Footer></div>
            
            <ToastContainer />
        </div>
    );
};

export default Homelayout;