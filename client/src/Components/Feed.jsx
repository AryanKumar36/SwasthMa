import React, { useState } from 'react';
import Sidebar from './SideBar';

export const Feed = ({username, date,imageUrl,title,content}) => {
  const [expanded, setExpanded] = useState(false);
  // const url = 'http://localhost:8080/api/v1'
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  // const response = axios.get(`${url}/post`).then((response) => response)

  return (
    // <div style={{backgroundColor: rgba(219, 234, 254, 0.2)}}> 
    <div className='flex flex-row justify-start'>
      <Sidebar />
    <div className="flex justify-center pt-5 min-w-full " >
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center p-5">
          <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src="https://www.bing.com/images/search?view=detailV2&ccid=fUP6H9r9&id=A7C7DDBCD5A8AA154A6E498DBA1C7E5ADE994BBC&thid=OIP.fUP6H9r9LUBe1qn0ZNP6zgHaE8&mediaurl=https%3a%2f%2fbabiesmata.com%2fwp-content%2fuploads%2f2020%2f04%2fWorkouts-and-Exercises-for-Pregnant-Women-2.jpg&exph=1200&expw=1800&q=pregnannt+mother+exercise&simid=608014086750031702&FORM=IRPRST&ck=7B99EDDC97E62D0989ABC97122AB9315&selectedIndex=2&itb=0" alt="Avatar" />
          </div>
          <div className="ml-3">
            <div className="font-medium">{username}</div>
            <div className="text-gray-500 text-sm">{date}</div>
          </div>
        </div>
        <img className="w-full" src="data:image/jpeg;base64,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" alt="post image" />
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
    </div>
  );
}
