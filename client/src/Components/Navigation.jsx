import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div >
        <nav className="sticky top-0 flex min-h-[50px] min-w-full bg-gradient-to-r from-blue-500 to-teal-500 z-50">
          <div className="flex-grow-0 w-1/2">
            <p className="text-black font-bold ml-4"></p>
          </div>
          <div className="flex-grow w-4/5 justify-end">
            <ul className="flex h-full min-w-[60%] justify-between items-center mr-4">
              <li className="mr-12">
                <Link to="/feed" className="text-black text-lg hover:text-gray-700 transition duration-300">Feed</Link>
              </li>
              <li className="mr-12">
                <Link to="/care-taker" className="text-black text-lg hover:text-gray-700 transition duration-300">CareTaker</Link>
              </li>
              <li className="mr-12">
                <Link to="/doctor" className="text-black text-lg hover:text-gray-700 transition duration-300">Doctor</Link>
              </li>
              <li className="mr-12">
                <Link to="/chemist" className="text-black text-lg hover:text-gray-700 transition duration-300">Chemist</Link>
              </li>
              <li className="mr-12">
                <Link to="/signup" className="text-black text-lg hover:text-gray-700 transition duration-300">SignUp</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navigation