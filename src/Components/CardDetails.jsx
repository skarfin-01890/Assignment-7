import React from 'react';
import { useParams } from 'react-router';

const CardDetails = () => {
	const {id}=useParams();
	console.log(params);
	return (
		<div>
			<h1>Card details</h1>
		</div>
	);
};

export default CardDetails;