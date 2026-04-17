import { Component, StrictMode, Suspense } from 'react'

import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';
import TimeLine from './pages/TimeLine.jsx';
import Stats from './pages/Stats.jsx';
import CardDetails from './Components/CardDetails.jsx';
import ErrorPge from './Components/ErrorPge.jsx';
import Context from './Components/context/Context.jsx';
;




const fetchPromsie=fetch('/data.json').then(res=>res.json());
console.log(fetchPromsie);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

	children:[
		{

			index:"true",
			element:<Suspense fallback={<span className="loading loading-dots loading-md  items-center text-center flex justify-center mx-auto p-30 mt-80"></span>}>
				<HomePage fetchPromsie={fetchPromsie}></HomePage>
			</Suspense>

		},
		{
			path:'/time',

			Component:TimeLine},
			{
path:"/stats",
Component:Stats

			},
			{
				path:"/card/:id",
				element:<Suspense fallback={<span className="loading loading-dots loading-md  items-center text-center flex justify-center mx-auto p-30 mt-80"></span>}>
				<CardDetails fetchPromsie={fetchPromsie}></CardDetails>
			</Suspense>

			}


	],
	errorElement:<ErrorPge></ErrorPge>
	}
,
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Context>
<RouterProvider router={router} />,
</Context>
  </StrictMode>,
)
