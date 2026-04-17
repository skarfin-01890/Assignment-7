import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
	return (
		<>

<div className='items-center text-center mt-20 container mx-auto'>

<h1 className='font-extrabold text-5xl'>Friends to keep close in your life</h1>
<p className='text-gray-400 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white p-3 px-5 mt-8'><FiPlus />Add Friend</button>
</div>
<div className='items-center grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 justify-center space-x-6 mt-10  container mx-auto'>
	<div className='bg-base-100 shadow-sm px-20 py-9  text-center '>
		<h2 className='font-bold text-3xl'>10</h2>
		<p className='whitespace-nowrap'>Total Friends</p>
	</div>
	<div className='bg-base-100 shadow-sm px-20 py-9  text-center'>
	<h2 className='font-bold text-3xl'>3</h2>
		<p>On Track</p>

	</div>
	<div className='bg-base-100 shadow-sm px-20 py-9  text-center'>
		<h2 className='font-bold text-3xl'>6</h2>
		<p className='whitespace-nowrap'>Need Attention</p>
	</div>
	<div className='bg-base-100 shadow-sm px-20 py-9 text-center'>

		<h2 className='font-bold text-3xl'>12</h2>
		<p className='whitespace-nowrap '>Interactions This Month</p>
	</div>
</div>

		</>
	);
};

export default Banner;