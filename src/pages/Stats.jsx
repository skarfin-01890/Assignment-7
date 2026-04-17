import React from 'react';
import { Pie, PieChart } from 'recharts';



const Stats = () => {




	const data = [
  { name: 'Text', value: 400, color: '#4F46E5' },
  { name: 'Call', value: 300, color: '#111827' },
  { name: 'Video', value: 300, color: '#15803D' },
];
	return (
		<div className='container mx-auto mt-20'>
		<h1 className='font-bold text-5xl'>Friendship Analytics</h1>
		<div>
<div className='card w-full h-108 rounded-xl bg-gray-100  shadow-sm mt-6'>
<div className='text-green-900 text-3xl p-4'>By Interaction Type
</div>

 <PieChart style={{ width: 'width:50%', maxWidth: '200px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"

        cornerRadius="50%"
        fill="#8884d8"

        paddingAngle={5}
        dataKey="value"

      />

    </PieChart>
</div>
		</div>

		</div>
	);
};

export default Stats;