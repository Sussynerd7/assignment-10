import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { useAuth } from '../../Authprovider/CustomAuthhook';
import MinimalFoodCard from './Foodmycards';

const Myfoods = () => {
 const [myfood,setmyfood] = useState([])
 const {user} = useAuth();
     const [load ,setload] = useState(true)
 
//   console.log(user.email)

useEffect(() => {
    
        // if (!user || !user.email) {
        //     console.log("User email not available, skipping fetch.");
        //     return;
        // }
// ,{
//                     headers:{
//                         "authorization" : `bearer ${accessToken}`
//                     }
    
        api.get('/myfoods', {
            
            params: {
                email: user.email 
            }
        })
    
            .then(res => {
                setmyfood(res.data);
                setload(false)
            })
            .catch(error => {
                console.error("Error fetching food data:", error);
            }); 
    

            

    }, [user]); 
    return (
        <div className='my-5 2xl:my-10 space-y-3 px-2  from-orange-50 to-amber-50'>
<title>My foods</title>

            {
    load? <div className='mx-auto flex justify-center my-10'><span className="loading loading-spinner xl:w-[500px] 2xl:w-[700px] w-[300px]"></span></div>:
myfood.map(food=>(<MinimalFoodCard key={food._id} food={food}></MinimalFoodCard>))
}
            
        </div>
    );
};

export default Myfoods;

// {
//     load? <div className='mx-auto flex justify-center my-10'><span className="loading loading-spinner xl:w-[500px] 2xl:w-[700px] w-[300px]"></span></div>:
// }