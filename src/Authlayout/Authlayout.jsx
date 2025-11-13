import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
// import Footer from 'daisyui/components/footer';

const Authlayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-50 to-amber-50">
<title>Authentication</title>
          
            <Navbar>

            </Navbar>
            <div className="mb-6">
                <h1 className="text-center text-[30px]  ">  Login / Register to continue</h1>
            </div>
            
            <div className="grow">
                <Outlet>

                </Outlet>
            </div>

            <div className="mt-5">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Authlayout;