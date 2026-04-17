import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	return (
		<div className='bg-green-950 h-104 items-center text-center space-y-5 mt-20'>
		<h1 className='text-white font-extrabold text-6xl pt-20'>KeenKeeper</h1>
		<p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
<h3 className='font-bold text-xl text-white'>Social Links</h3>
<div className='flex text-center justify-center gap-3'>
<a className='bg-white p-2 rounded-full'>
<FaSquareInstagram/></a>
<a className='bg-white p-2 rounded-full'>
<FaFacebook /></a>
<a className='bg-white p-2 rounded-full'>
<FaXTwitter /></a>
</div>
<h1 className='border border-t-gray-700 mx-auto container'></h1>
<div>
<div className='flex justify-between container mx-auto'>
	<h1 className='text-gray-300'>&copy; 2026 KeenKeeper. All rights reserved.</h1>

	<div className='flex gap-8'>
		<h2 className='text-gray-300'>Privacy Policy</h2>
		<h2 className='text-gray-300'>Terms of Service</h2>
		<h2 className='text-gray-300'>Cookies</h2>

	</div>
	</div>
</div>



		</div>
	);
};

export default Footer;