import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { useAuth } from '../../Authprovider/CustomAuthhook';
import MinimalFoodCard from './Foodmycards';

const Myfoods = () => {
 const [myfood,setmyfood] = useState([])
 const {user,accessToken} = useAuth();
     const [load ,setload] = useState(false)
 
  console.log(user.email)

useEffect(() => {
    setload(true)
        if (!user || !user.email) {
            console.log("User email not available, skipping fetch.");
            return;
        }
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
            })
            .catch(error => {
                console.error("Error fetching food data:", error);
            }); 
    setload(false)

            

    }, [user]); 
    return (
        <div className='my-5 2xl:my-10 space-y-3 px-2'>

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