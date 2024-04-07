import React from 'react';
import Navigation from './Components/Navigation';
import {Footer} from './Components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Feed } from './Components/Feed';
import { Doctor } from './Components/Doctor';
import { Chemist } from './Components/Chemist';
import { SignUp } from './Components/SignUp';
import { CareTaker } from './Components/CareTaker';
import { CareTakerProfile } from './Components/CareTakerProfile';

function App() {

  return (
    <Router>
      <Navigation />
    <Routes>
          <Route path="/feed" exact element={<Feed />} />
          <Route path="/doctor" element={<>
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
          </>} />
          <Route path="/chemist" element={<Chemist />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/care-taker' element={<CareTaker />} />
          <Route path='/care-taker/:username' element={<CareTakerProfile />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
