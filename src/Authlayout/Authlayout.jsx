import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
// import Footer from 'daisyui/components/footer';

const Authlayout = () => {
    return (
        <div class=" px-1 2xl:px-3 mb-5 bg-gradient-to-r from-orange-50 to-amber-50 h-screen">
          
            <Navbar>

            </Navbar>
<div>
    <h1 className="text-center text-[30px]  ">  Login / Register to conitnue</h1>
</div>
            <Outlet>

            </Outlet>
            <div className="mt-5">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Authlayout;