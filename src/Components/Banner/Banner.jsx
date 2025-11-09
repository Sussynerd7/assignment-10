import React from 'react';
import Bannermarque from '../BannerMarque/Bannermarque';

const Banner = () => {
    return (
       <>
<div className='flex justify-between items-center'>
    <img className=' 2xl:w-[430px] xl:w-[320px] lg:w-[250px] md:[180px] sm:w-[150px] w-[100px]' src="https://eats.axiomthemes.com/splash/src/img/hero/1.png" alt="" />
<div className=''>
               <h1 className='text-[#ef451c] text-[17px] 2xl:text-[80px] xl:text-[60px] lg:text-[48px] md:text-[30px]  my-3 text-center'>
    Community - Food - Sharing
</h1>
<h1 className='text-[#ef451c] text-[17px] 2xl:text-[80px] xl:text-[60px] lg:text-[48px] md:text-[30px]  mt-3 text-center'>
    Sharing is caring
</h1>

            </div>
            <img className=' relative bottom-10 2xl:w-[430px] xl:w-[320px] lg:w-[250px] md:[180px] sm:w-[150px] w-[100px]' src="https://eats.axiomthemes.com/splash/src/img/hero/2.png" alt="" />
</div>
<img className='mx-auto 2xl:w-[430px] xl:w-[320px] lg:w-[250px] md:[180px] sm:w-[150px] w-[130px]' src="https://eats.axiomthemes.com/splash/src/img/hero/3.png" alt="" />
            {/* <Bannermarque></Bannermarque> */}
            </>
    );
};

export default Banner;
