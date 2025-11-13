import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// Add react-toastify imports below
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Foodgrid from '../Foodshow/Foodgrid';
import Bannermarque from '../BannerMarque/Bannermarque';
import { Link } from 'react-router';
import OurMission from './Section1';
import HowItWorks from './Howitworks';
import api from '../../Api/Api';

const Home = () => {            
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        }); 
    }, []);

    return (
        <div className='bg-gradient-to-r from-orange-50 to-amber-50'>
            <title>Home -Plate Share</title>
            {/* The ToastContainer component needs to be rendered at the root level */}

            <Banner></Banner>
            <div className='mt-10 mb-18'>
                <Bannermarque></Bannermarque>
            </div>

            <h1 className="font-semibold text-center text-[#ef451c] mb-5 text-[40px]">Foods for big group of friends</h1>

            <div className="mb-5" data-aos="fade-up"> 
                <Foodgrid></Foodgrid>
            </div>
            
            <div className="flex justify-center my-3 text-center">
                <Link to={'/foods'}>
                    <button className='
                        btn mx-auto text-white bg-[#ef451c] border-[#ef451c] hover:bg-[#d9400f] hover:border-[#d9400f] shadow-xl shadow-red-300/50 font-bold text-lg
                        px-8
                        py-3
                        transition-all 
                        duration-300 
                        hover:scale-105
                    '>
                        View All Foods
                    </button>         
                </Link>
            </div>

            <div data-aos="fade-right">
                <OurMission></OurMission>
            </div>
            
            <div data-aos="fade-left">
                <HowItWorks></HowItWorks>
            </div>

        </div>
    );
};

export default Home;