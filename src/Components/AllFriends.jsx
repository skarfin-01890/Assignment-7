import React, { use } from 'react';
import { Link } from 'react-router';

const AllFriends = ({fetchPromsie}) => {

	const data=use(fetchPromsie);

	return (<>
		<div className='container mx-auto mt-20'>
			<h1 className='font-semibold mb-4 text-4xl'>Your Friends</h1>
		</div>
<div className=' grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 space-y-3 container mx-auto gap-3 space-x-2'>
		{
data.map((info,ind)=>{
	return <Link to={`/card/${info.id}`} className="card bg-base-100  shadow-sm " key={ind}>
  <figure className="px-10 pt-10">
    <img className="w-32 h-32 rounded-full object-cover"src={info.picture}
      alt="ui faces" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">{info.name}</h2>
    <p>{info.days_since_contact}d ago</p>
	<div className="flex flex-wrap gap-2 justify-center">
	{
		info.tags.map((tag,ind)=>{
			return <div className='flex' key={ind}>
			<h2 className='whitespace-nowrap bg-green-300 text-black p-1 rounded-xl'>{tag}</h2>
			</div>
		})
	}
	</div>
	<h2 className={`text-white p-2 px-3 rounded-xl ${info.status=='almost_due'? "bg-yellow-700 ":
	info.status=='on_track'? "bg-green-950":"bg-red-800"}`}>{info.status}</h2>


  </div>
</Link>
		})
		}
		</div>
		</>
	);
};

export default AllFriends;