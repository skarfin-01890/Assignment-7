import React, { use } from 'react';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';
import { MdOutlineAddIcCall } from 'react-icons/md';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useParams } from 'react-router';

const CardDetails = ({fetchPromsie}) => {
	const data=use(fetchPromsie);

	const {id}=useParams();
	const expectedCard=data.find((card)=>card.id==id)
	console.log(expectedCard);

	return (<div className='container mx-auto mt-12 grid grid-cols-4'>
<div className='col-span-1'>
<div className=''>


<div className="card w-87 h-90 bg-base-100  shadow-sm ">
  <figure className="">
    <img className="w-32 h-32 rounded-full object-cover"src={expectedCard.picture}
      alt="ui faces" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">{expectedCard.name}</h2>

	<h2 className={`text-white p-2 px-3 rounded-xl ${expectedCard.status=='almost_due'? "bg-yellow-700 ":
	expectedCard.status=='on_track'? "bg-green-950":"bg-red-800"}`}>{expectedCard.status}</h2>
	<div className="flex flex-wrap gap-2 justify-center">

	{
		expectedCard.tags.map((tag,ind)=>{
			return <div className='flex' key={ind}>
			<h2 className='whitespace-nowrap bg-green-300 text-black p-1 rounded-xl'>{tag}</h2>
			</div>
		})
	}

	</div>
<h1>{expectedCard.bio}</h1>
	<p>Email: {expectedCard.email}</p>


  </div>


</div>


  </div>





<div className='card w-87 h-17 bg-base-100  shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center pt-5 text-2xl font-semibold gap-2'><RiNotificationSnoozeLine />Snooze 2 Weeks</h1>
</div>


<div className='card w-87 h-17 bg-base-100  shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center pt-5 text-2xl font-semibold gap-2'><FiArchive />Archive</h1></div>
<div className='card w-87 h-17 bg-base-100  shadow-sm mt-6'>
<h1 className='text-center text-red-500 items-center flex justify-center pt-5 text-2xl font-semibold gap-2'><RiDeleteBinLine />Delete</h1></div>




			</div>
			<div className='col-span-3'>




<div className='grid grid-cols-3'>

				<div className='card w-57 h-33  text-center shadow-sm mt-6'>
<h1 className='pt-5 text-3xl font-semibold gap-2'>62</h1>
<p className='text-gray-500'>Days Since Contact</p>
</div>
				<div className='card w-57 h-33 bg-base-100 text-center shadow-sm mt-6'>
<h1 className='pt-5 text-3xl font-semibold gap-2'>30</h1>
<p className='text-gray-500'>Goal(Days)</p>
</div>
				<div className='card w-57 h-33 bg-base-100 text-center shadow-sm mt-6'>
<h1 className='pt-5 text-3xl font-semibold gap-2'>Feb 27, 2026</h1>
<p className='text-gray-500'>Next Due</p>
</div>





			</div>
			<div className='card w-250 h-27 bg-base-100 p-3 shadow-sm mt-10'>
			<div className='flex justify-between'>
				<h3>Relationship Goal</h3>
				<button className='btn'>Edit</button>
			</div>
			<p>Connect every <span className='font-bold'>30 days</span></p>

			</div>

			<div className='card w-250 h-60 bg-base-100  shadow-sm mt-10 p-5'>
			<h3 className='text-xl'>Quick Check in</h3>
<div className='flex justify-between'>
			<div className='card w-60 h-h-30 bg-gray-100 text-center shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center flex-col mt-10'><MdOutlineAddIcCall /></h1>
<p className='text-gray-500 text-2xl'>Call</p>
</div>
			<div className='card w-60 h-h-30 bg-gray-100 text-center shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center flex-col mt-10'><IoMdText /></h1>
<p className='text-gray-500 text-2xl'>Text</p>
</div>
			<div className='card w-60 h-30 bg-gray-100 text-center shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center flex-col mt-10'><FaVideo /></h1>
<p className='text-gray-500 text-2xl'>Video</p>
</div>
</div>
			</div>

			</div>




			</div>

	);
};

export default CardDetails;