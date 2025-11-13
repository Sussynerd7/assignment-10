import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen  bg-gradient-to-r from-orange-50 to-amber-50">
                {/* Navbar is kept sticky at the top */}
                <div className="sticky top-0 z-50">
                    <Navbar ></Navbar>
                </div>
                
                {/* The main content div uses flex-grow to push the footer down */}
                <div className='flex-grow'>
                    <Outlet></Outlet>
                </div>
                
                {/* Footer is naturally placed at the end of the flex column */}
                
                    <Footer></Footer>
                
            </div>
            
            {/* ToastContainer moved outside the structural layout for proper global overlay behavior */}
            <ToastContainer />
        </>
    );
};

export default Homelayout;