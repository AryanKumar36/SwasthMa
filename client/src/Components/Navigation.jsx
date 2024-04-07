import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isAuth,setIsAuth] = useState(false)
  return (
        <nav className="sticky top-0 flex min-h-[50px] min-w-full bg-blue-500 z-50 font-sans ">
          <div className="flex-grow-0 w-1/2">
            <p className="text-black font-bold ml-4"></p>
          </div>
          <div className="flex-grow w-4/5 justify-end">
            <ul className="flex h-full min-w-[60%] justify-between items-center mr-4 text-white font-serif">
              <li className="mr-12">
                <Link to="/feed" className=" text-lg hover:text-gray-700 transition duration-300">Feed</Link>
              </li>
              <li className="mr-12">
                <Link to="/care-taker" className="text-lg hover:text-gray-700 transition duration-300">CareTaker</Link>
              </li>
              <li className="mr-12">
                <Link to="/doctor" className="text-lg hover:text-gray-700 transition duration-300">Doctor</Link>
              </li>
              <li className="mr-12">
                <Link to="/chemist" className="text-lg hover:text-gray-700 transition duration-300">Chemist</Link>
              </li>
              <li className="mr-12">
                {isAuth ? (
                  <Link to="/profile" className="text-lg hover:text-gray-700 transition duration-300">Profile</Link>
                ):(<Link to="/signup" className="text-lg hover:text-gray-700 transition duration-300">Signup</Link>)}
                
              </li>
            </ul>
          </div>
        </nav>
  );
};
export default Navigation