import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import Foodcards from '../Foodshow/Foodcards';
// import { useAuth } from '../../Authprovider/CustomAuthhook';

const Allfood = () => {
   const  [foods,setFood] = useState([])
//    const {user} = useAuth();
//    console.log(user)

   useEffect(() => {
        api.get('/allfoods')
            .then(res => {

                const available = res.data.filter(food =>food.status === "available")
                console.log(available)
                setFood(available);
            })
            
            .catch(error => {
 console.error("Error fetching food data:", error);
            }); }, []);
   
    

    // console.log(foods)
    return (
        <div className='bg-gradient-to-r  from-orange-50 to-amber-50'>

            <h1 className='text-secondary text-[40px] font-semibold text-center my-10'>Browse the available food</h1>

            <div className='2xl:grid-cols-3 grid-cols-2 grid gap-2 max-w-[1200px] mx-auto px-2'>
            {foods.map(food=>(<Foodcards key={food._id} food={food} ></Foodcards>))}
        </div>
        </div>
    );
};

export default Allfood;