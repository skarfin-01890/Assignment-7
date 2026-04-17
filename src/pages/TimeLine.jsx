import React, { useContext } from 'react';
import { TimeLineContext } from '../Components/context/Context';
import { TiVideo } from 'react-icons/ti';
import { IoMdText } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

const TimeLine = () => {
	const {timeline, setTimeline}=useContext(TimeLineContext)
	const {text,setText}=useContext(TimeLineContext)
	const{audio,setAudio}=useContext(TimeLineContext);
	console.log(text);

console.log(timeline);
	return (
		<div className='container mx-auto mt-24'>
		<h1 className='font-bold text-5xl'>Timeline</h1>
			{

				timeline.map((time,ind)=>{
					return<div key={ind}>











					<div className='card w-full h-25 bg-gray-100 flex justify-center shadow-sm mt-6'>



<h1 className='flex flex-row items-center p-4 pt-5 text-2xl font-semibold gap-2'>
    <TiVideo />


<span className="font-semibold">Video</span> with {time.name}</h1>
					<p className="px-4">
  {new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })}
</p>
					</div>

					</div>
				})
			}
			{

				text.map((te,ind)=>{
					return<div key={ind}>











					<div className='card w-full h-25 bg-gray-100 flex justify-center shadow-sm mt-6'>



<h1 className='flex flex-row items-center p-4 pt-5 text-2xl font-semibold gap-2'>
    <IoMdText />


<span className="font-semibold">Text</span> with {te.name}</h1>
					<p className="px-4">
  {new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })}
</p>
					</div>

					</div>
				})
			}
			{

				audio.map((au,ind)=>{
					return<div key={ind}>











					<div className='card w-full h-25 bg-gray-100 flex justify-center shadow-sm mt-6'>



<h1 className='flex flex-row items-center p-4 pt-5 text-2xl font-semibold gap-2'>
    <IoCall />


<span className="font-semibold">Call</span> with {au.name}</h1>
					<p className="px-4">
  {new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })}
</p>
					</div>

					</div>
				})
			}



















		</div>
	);
};

export default TimeLine;