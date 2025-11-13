import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import Foodcards from '../Foodshow/Foodcards';
// import { useAuth } from '../../Authprovider/CustomAuthhook';

const Allfood = () => {
   const  [foods,setFood] = useState([])
   const  [load,setload] = useState(true)

   

//    console.log(user)

   useEffect(() => {
    setload(true)
        api.get('/allfoods')
            .then(res => {

                const available = res.data.filter(food =>food.status === "available")
                
                setFood(available);
                setload(false)
            })
            
            .catch(error => {
 console.error("Error fetching food data:", error);
            }); }, []);
   
    

    // console.log(foods)
    return (
        <div className='bg-gradient-to-r h-full from-orange-50 to-amber-50'>
<title>All foods</title>
            <h1 className='text-secondary text-[40px] font-semibold text-center my-10'>Browse the available food({foods.length})</h1>

{
    load? <div className='mx-auto flex justify-center my-10'><span className="loading loading-spinner xl:w-[500px] 2xl:w-[700px] w-[300px]"></span></div>:  <div className='2xl:grid-cols-3 grid-cols-2 grid gap-2 max-w-[1200px] mx-auto px-2'>
            {foods.map(food=>(<Foodcards key={food._id} food={food} ></Foodcards>))}
        </div> 
   }
            
        </div>
    );
};

export default Allfood;



// {
//     loader? <div className='mx-auto flex justify-center my-10'><span className="loading loading-spinner xl:w-[500px] 2xl:w-[700px] w-[300px]"></span></div>:" <div className='2xl:grid-cols-3 grid-cols-2 grid gap-2 max-w-[1200px] mx-auto px-2 '>

//         {foods.map(food=>(<Foodcards key={food._id} food={food}></Foodcards>))}
//     </div>"
//    }