import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/ChatGPT Image Nov 9, 2025, 12_26_34 PM.png'
import { useAuth } from '../../Authprovider/CustomAuthhook';
import { IoIosLogOut } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';
const Navbar = () => {
        const { user,logOut } = useAuth();
// console.log(user.photoURL);


// const img = user.photoURL;
const navigate = useNavigate();

    // console.log(user.photoURL)
    // const [open, setOpen] = React.useState(false);
const logout = ()=>{
  logOut()
navigate('/')
}
const dynamicbtn = <>
  <div className="dropdown"> 
    <label tabIndex={0} className="btn bg-[#ef451c] text-white pl-1 py-[30px] text-[18px] gap-2 flex items-center">
      <figure>
        <img src={ user?.photoURL || logo} alt="user" className="w-12 h-12 rounded-full" />
      </figure>
      
      Options
    </label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 mt-2">
   <div className='flex flex-col space-y-2'>
     <Link to={
      '/create'
     } className='btn'>Add food <FaArrowRight></FaArrowRight></Link>
    <Link to={'/requests'} className='btn'>My food requests <FaArrowRight></FaArrowRight></Link>
    <Link to={'/myfoods'} className='btn'>Manage My food <FaArrowRight></FaArrowRight></Link>
      <button onClick={logout} className="btn">log out <IoIosLogOut></IoIosLogOut> </button>


   </div>
    </ul>
  </div>
</>


    const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `pb-1 2xl:text-[18px] text-[14px] border-b-2 ${
          isActive
            ? "border-[#34533f]"
            : "border-transparent hover:border-[#34533f] transition-all duration-200"}`}>
      Home
    </NavLink>

    <NavLink
      to="/foods"
      className={({ isActive }) =>
        `pb-1 border-b-2 2xl:text-[18px] text-[14px] ${
          isActive
            ? "border-[#34533f]"
            : "border-transparent hover:border-[#34533f] transition-all duration-200"
        }`
      }
    >
      All foods
    </NavLink>
  </>
);

    return (
        <div className='border-b 2xl:px-3 pt-1 bg-gradient-to-r from-orange-50 to-amber-50  border-[#34533f]'>
            <div className='flex w-full items-center  justify-between  mb-3 '>
                {/* <div>
                    <h1 className="text-[#ef451c] text-[40px] font-bold ">CFS/</h1>
                </div> */}
<figure>
    <img className='w-[120px] ' src={logo} alt="" />
</figure>
<div className='flex text-[18px] text-[#34533f] items-center justify-center gap-3'>
    {links}
</div>


{
    user?  dynamicbtn: <Link to={'/auth/login'}><button className='bg-[#ef451c] btn text-[20px]  px-[30px] py-[23px] text-white  '>Login</button></Link>
}

{/* <Link to={'/auth/login'}><button className='bg-[#ef451c] btn text-[20px]  px-[30px] py-[23px] text-white  '>Login</button></Link> */}
            </div>
        </div>
    );
};

export default Navbar;