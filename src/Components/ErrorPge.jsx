import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPge = () => {
	const error = useRouteError();

	return (


		<div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
        <p className="mt-4 text-lg">Something went wrong</p>
        <p className="text-gray-500 mt-2">
          {error?.statusText || error?.message}
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Home



  </a>
      </div>
    </div>
	);
};

export default ErrorPge;