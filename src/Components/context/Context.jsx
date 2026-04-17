import React, { createContext, useState } from 'react';
export const TimeLineContext=createContext();
const Context = ({children}) => {
	const[audio,setAudio]=useState([]);
	const [timeline,setTimeline]=useState([])
	const [text,setText]=useState([]);
	const data={
		timeline, setTimeline,
		text,setText,
		audio,setAudio
	}
	return (
		<TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>

	);
};

export default Context;