import React from 'react';
import { Link } from 'react-router';
 import logo from '../assets/App-Error.png'
const Error = () => {
    return (
        <div className='flex justify-center mx-auto flex-col '>
           <div className='mx-auto my-20 '> 
            <img src={logo} alt="" />
            
            <Link to={'/'}><button className='bg-primary text-white btn w-[400px]'>Go back</button></Link></div>
        </div>
    );
};

export default Error;