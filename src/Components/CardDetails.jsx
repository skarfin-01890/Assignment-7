import React, { use, useContext,  } from 'react';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';
import { MdOutlineAddIcCall } from 'react-icons/md';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useParams } from 'react-router';
import { TimeLineContext } from './context/Context';
import { toast } from 'react-toastify';

const CardDetails = ({fetchPromsie}) => {
	const data=use(fetchPromsie);
	const {timeline, setTimeline}=useContext(TimeLineContext)
	const {text,setText}=useContext(TimeLineContext);
	const {audio,setAudio}=useContext(TimeLineContext);
	const handleText=()=>{
		setText([...text, expectedCard])
		toast.success('You clicked on the text button')
	}
	const handleAudio=()=>{
setAudio([...audio,expectedCard])
toast.success('You clicked on the Call button')
	}

	const handleTimeline=()=>{
setTimeline([...timeline,setTimeline])
toast.success('You clicked on the Video button')
	}


	const {id}=useParams();
	const expectedCard=data.find((card)=>card.id==id)
	console.log(expectedCard);

	return (<div className='container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
<div className='lg:col-span-1'>
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





<button className='card w-87 h-17 bg-base-100 btn cursor-pointer shadow-sm mt-6'>
<div className='text-center  items-center flex justify-center pt-5 text-2xl font-semibold gap-2'><RiNotificationSnoozeLine />Snooze 2 Weeks</div>
</button>


<button className='card w-87 h-17 bg-base-100 btn cursor-pointer shadow-sm mt-6'>
<div className='text-center items-center flex justify-center pt-5 text-2xl font-semibold gap-2'><FiArchive />Archive</div></button>
<button className='card w-87 h-17 bg-base-100 btn cursor-pointer  shadow-sm mt-6'>
<div className='text-center  text-red-500 items-center flex justify-center pt-5 text-2xl font-semibold gap-2'><RiDeleteBinLine />Delete</div></button>




			</div>
			<div className='col-span-1 md:col-span-1  lg:col-span-3'>




<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

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
			<div className='flex-wrap lg:flex justify-between'>
				<h3>Relationship Goal</h3>
				<button className='btn'>Edit</button>
			</div>
			<p>Connect every <span className='font-bold'>30 days</span></p>

			</div>

			<div className='card   bg-base-100  shadow-sm mt-10 p-5 lg:w-250 h-60'>
			<h3 className='text-xl'>Quick Check in</h3>
<div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'>
			<button onClick={handleAudio} className='card btn cursor-pointer w-60 h-30 bg-gray-100 text-center shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center flex-col mt-10'><MdOutlineAddIcCall /></h1>
<p className='text-gray-500 text-2xl'>Call</p>
</button>
			<button onClick={handleText}  className='card btn flex flex-col cursor-pointer w-60 h-30 bg-gray-100 text-center shadow-sm mt-6'>
<h1 className='text-center items-center flex justify-center flex-col mt-10'><IoMdText /></h1>
<p className='text-gray-500 text-2xl'>Text</p>
</button>
			<button onClick={handleTimeline} className='card w-60 h-30 bg-gray-100 text-center shadow-sm mt-6 cursor-pointer btn '>
<h1 className='text-center items-center flex justify-center flex-col mt-10'><FaVideo /></h1>
<p className='text-gray-500 text-2xl'>Video</p>
</button>
</div>
			</div>

			</div>




			</div>

	);
};

export default CardDetails;