import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Foodgrid from '../Foodshow/Foodgrid';
import Bannermarque from '../BannerMarque/Bannermarque';
import { Link } from 'react-router';
import OurMission from './Section1';
import HowItWorks from './Howitworks';
import api from '../../Api/Api';

const Home = () => {
//     const [t,sett] = useState()
//  const handletestpatch = (e)=>{

    
// e.preventDefault();

//  const title = e.target.title.value;

//  console.log(title);
 
//  api.patch('/testpatch/691304b2be4a629109a5b7c2',{title})
 

//  }

//  useEffect(()=>{
//     api.patch('/testpatch/691304b2be4a629109a5b7c2',t)
//  })

    return (
        <div className='bg-gradient-to-r  from-orange-50 to-amber-50'>
            <Banner></Banner>
            <div className='mt-10 mb-18'>
                <Bannermarque></Bannermarque>
            </div>

            <h1 className="font-semibold text-center text-[#ef451c] mb-5 text-[40px]">Foods for big group of friends</h1>


            <div className="mb-5"> <Foodgrid></Foodgrid></div>
            <div className="flex justify-center my-3 text-center">
                <Link to={'/foods'}>
            <button className='
                btn  mx-auto  text-white bg-[#ef451c] border-[#ef451c] hover:bg-[#d9400f] hover:border-[#d9400f] shadow-xl shadow-red-300/50 font-bold text-lg
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
                {/* <div className="flex justify-center"><form onSubmit={handletestpatch} action="">
                    
                     <input type="text" name='title' className='input' />
                     <button  className="btn-primary btn"> Patch</button>
                     </form></div> */}

                <div>
                    <OurMission></OurMission>
                </div>
                <div>
                    <HowItWorks></HowItWorks>
                </div>

        </div>
    );
};

export default Home;
