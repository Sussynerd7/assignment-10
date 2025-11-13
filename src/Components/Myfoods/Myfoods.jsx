import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { useAuth } from '../../Authprovider/CustomAuthhook';
import MinimalFoodCard from './Foodmycards';

const Myfoods = () => {
 const [myfood,setmyfood] = useState([])
 const {user,accessToken} = useAuth();
  console.log(user.email)
useEffect(() => {
    
        if (!user || !user.email) {
            console.log("User email not available, skipping fetch.");
            return;
        }
// ,{
//                     headers:{
//                         "authorization" : `bearer ${accessToken}`
//                     }
    
        api.get('/myfoods', {
             headers:{
                        "authorization" : `bearer ${accessToken}`
                    },
            params: {
                email: user.email 
            }
        })
    
            .then(res => {
                console.log("Fetched user foods:", res.data);
                setmyfood(res.data);
            })
            .catch(error => {
                console.error("Error fetching food data:", error);
            }); 
            

    }, [user]); 
    return (
        <div className='my-5 2xl:my-10 space-y-3 px-2'>
            {myfood.map(food=>(<MinimalFoodCard key={food._id} food={food}></MinimalFoodCard>))}
        </div>
    );
};

export default Myfoods;