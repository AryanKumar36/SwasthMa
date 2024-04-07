import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import {Footer} from './Components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Feed } from './Components/Feed';
import { Doctor } from './Components/Doctor';
import { Chemist } from './Components/Chemist';
import { SignUp } from './Components/SignUp';
import { CareTaker } from './Components/CareTaker';
import { CareTakerProfile } from './Components/CareTakerProfile';
import Sidebar from './Components/SideBar';

function App() {
const [showSideBar, isShowSideBar] = useState(true)
  return (
    <Router>
      <Navigation />
          <div className='flex flex-row justify-start'>
          {showSideBar ?<Sidebar /> : null}
    <Routes>
          <Route path="/feed" exact element={<Feed isShowSideBar={isShowSideBar} />} />
          <Route path="/doctor" element={<div className='flex flex-col items-center min-w-full'>
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
          </div>} />
          <Route path="/chemist" element={<Chemist isShowSideBar={isShowSideBar} />} />
          <Route path="/signup" element={<SignUp isShowSideBar={isShowSideBar} />} />
          <Route path='/care-taker' element={<CareTaker isShowSideBar={isShowSideBar}/>} />
          <Route path='/care-taker/:username' element={<CareTakerProfile isShowSideBar={isShowSideBar}/>} />
        </Routes>
           </div>
        <Footer />
    </Router>
  )
}

export default App
