import { Component, StrictMode } from 'react'

import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';
import TimeLine from './pages/TimeLine.jsx';
import Stats from './pages/Stats.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
	children:[
		{

			index:"true",
			Component:HomePage
		},
		{
			path:'/time',
			Component:TimeLine},
			{
path:"/stats",
Component:Stats

			},


	]
	}
,
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />,
  </StrictMode>,
)
