import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import {Doctor} from './Doctor';
import {Chemist} from './Chemist';
import {SignUp} from './SignUp';

// % parent container vw screen (padding and margin avoid)
const Navigation = () => {
  return (
    <Router>
      <div >
        <nav style={{position:'sticky', top:0, display:'flex', flexDirection:'row', minHeight:'50px', minWidth:'100%', zIndex:999, backgroundColor:'#6FB3B8'}}>
             <div style={{minWidth:'20%', }}>
            <p>Logo</p>
             </div>
             <div style={{minWidth:'80%',display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
               <ul style={{ display:'flex', flexDirection:'row', minHeight:'100%',minWidth:'60%', justifyContent:'space-between', alignItems:'center'}}>
               <li style={{ marginRight: '20%' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '20%' }}>

              <Link to="/doctor">Doctor</Link>
            </li>
            <li style={{ marginRight: '20%' }}>

              <Link to="/chemist">Chemist</Link>
            </li>
            <li style={{ marginRight: '20%' }}>

              <Link to="/signup">SignUp</Link>
            </li>
                </ul> 
             </div>
        </nav>
      {/* <nav style={{ position: 'sticky', top: 0, left: 0, minWidth: '100vw', backgroundColor: 'lightgray', padding: '10px 20px', zIndex: 999 }}>
           <ul style={{ display: 'flex', listStyle: 'none', padding: 0 , marginLeft:'40%', width:'50vw'}}> 
            <li style={{ marginRight: '20%' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '20%' }}>

              <Link to="/doctor">Doctor</Link>
            </li>
            <li style={{ marginRight: '20%' }}>

              <Link to="/chemist">Chemist</Link>
            </li>
            <li style={{ marginRight: '20%' }}>

              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/chemist" element={<Chemist />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
        </div>
    </Router>
  );
};
export default Navigation