import React, {  } from 'react';
import Banner from '../Components/Banner';
import AllFriends from '../Components/AllFriends';

const HomePage = ({fetchPromsie}) => {


	return(

		<>

<Banner></Banner>
<AllFriends fetchPromsie={fetchPromsie}></AllFriends>

		</>

	);
};

export default HomePage;