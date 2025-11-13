import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Foodcards from './Foodcards'
import api from '../../Api/Api'
import { Link } from 'react-router'

const Foodgrid = () => {
  const [foodList, setFoodList] = useState([])
   const [loader,setload] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setload(true)
        const response = await api.get('/presorted')

         const available = response.data.filter(food =>food.status === "available")
                
        setFoodList(available);
        setload(false)
      } catch (error) {
        console.error('Error fetching foods:', error)
      }
    }

    fetchData()
  }, [])
const foods = foodList.slice(0,6)
  return (
    <>
   {
    loader? <div className='mx-auto flex justify-center my-10'><span className="loading loading-spinner xl:w-[500px] 2xl:w-[700px] w-[300px]"></span></div>: <div className='2xl:grid-cols-3 grid-cols-2 grid gap-2 max-w-[1200px] mx-auto px-2 '>

        {foods.map(food=>(<Foodcards key={food._id} food={food}></Foodcards>))}
    </div>
   }
{/* 
   <Link className='my-5' to={'/foods'}> <button className='btn bg-secondary text-white text-2xl font-semibold'>All foods</button></Link> */}
    </>
  )
}

export default Foodgrid
