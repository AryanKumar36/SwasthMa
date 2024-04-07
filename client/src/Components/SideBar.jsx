import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full min-h-screen w-56 bg-blue-100 fixed">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="text-xl font-semibold p-5 text-gray-700">
            Mom's Corner
          </div>
          <ul className="flex flex-col">
            <li>
              <NavLink to="/posts" activeClassName="bg-blue-500 text-white" className="flex items-center p-4 hover:bg-blue-300 transition-colors">
                <span className="ml-2">Posts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/hired-caretaker" activeClassName="bg-blue-500 text-white" className="flex items-center p-4 hover:bg-blue-300 transition-colors">
                <span className="ml-2">Hired Caretaker</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" activeClassName="bg-blue-500 text-white" className="flex items-center p-4 hover:bg-blue-300 transition-colors">
                <span className="ml-2">Create Post</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
