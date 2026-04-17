import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const NavBar = () => {
	return (



<div className="navbar bg-base-100 shadow-sm flex justify-between px-15">
  <div className="">
    <a className=" text-4xl font-extrabold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
  </div>
  <div className="flex-none">

          <ul className="bg-base-100 space-x-4 flex flex-col lg:flex-row">
            <NavLink to={'/'} end className={  ({isActive})=>{
			return` px-3 flex justify-center items-center ${isActive?"bg-[#244D3F]  text-white p-3":"bg-white text-black p-3"}` }}><FaHome />Home</NavLink>
             <NavLink to={'/time'}className={  ({isActive})=>{
			return` flex gap-1 items-center ${isActive?"bg-[#244D3F] text-white p-3":"bg-white text-black p-3"} ` }}><RiTimeLine />Timeline</NavLink>

             <NavLink to={'/stats'}className={  ({isActive})=>{
			return` gap-1  flex  items-center ${isActive?"bg-[#244D3F]  text-white p-3":"bg-white text-black p-3"} ` }}><ImStatsDots />Stats</NavLink>

          </ul>

  </div>
</div>



	);
};

export default NavBar;