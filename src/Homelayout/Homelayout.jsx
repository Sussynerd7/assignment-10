import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Homelayout = () => {
    return (
        <div className="  flex flex-col space-y-0  bg-gradient-to-r from-orange-50 to-amber-50 ">
            <div className="sticky top-0 z-50"><Navbar ></Navbar></div>
           
            <div className='grow'><Outlet></Outlet></div>
            <div className="stiky bottom-0"> <Footer></Footer></div>
           
           
        </div>
    );
};

export default Homelayout;