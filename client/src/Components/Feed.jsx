import React, { useState } from 'react';

export const Feed = ({username, date,imageUrl,title,content}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex justify-center pt-5">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center p-5">
          <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Avatar" />
          </div>
          <div className="ml-3">
            <div className="font-medium">{username}</div>
            <div className="text-gray-500 text-sm">{date}</div>
          </div>
        </div>
        <img className="w-full" src={imageUrl} alt="post image" />
        <div className="p-5">
          <h5 className="text-gray-900 text-lg leading-tight font-medium mb-2">2 Healthy Pregnancy Tips for the Whole 9 Months</h5>
          <p className="text-gray-700 text-base mb-4">
            <b>Method:</b><br />
            Take a Prenatal Vitamin. It's smart to start taking prenatal vitamins as soon as you know you're pregnant...
          </p>
          <div className="flex items-center justify-between">
            <button aria-label="add to favorites" className="text-red-500 hover:text-red-400 transition duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button aria-label="share" className="text-blue-500 hover:text-blue-400 transition duration-150">
            </button>
            <button onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" className="transform transition-transform duration-200" >
              <svg xmlns="http://www.w3.org/2000/svg" className={`${expanded ? 'rotate-180' : 'rotate-0'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          {expanded && (
            <div className="text-gray-700 text-base mt-4">
              <p>1. Take a Prenatal Vitamin. It's smart to start taking prenatal vitamins...</p>
              <p>2. Exercise. Staying active is important for your general health...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
