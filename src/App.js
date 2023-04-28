import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/home';
import Q1 from './pages/q1';
import Q2 from './pages/q2';
import Q3 from './pages/q3';
import Q4 from './pages/q4';
import Q5 from './pages/q5';
import Q6 from './pages/q6';
import Q7 from './pages/q7';
import Q8 from './pages/q8';
import Q9 from './pages/q9';
import Q10 from './pages/q10';





// for multi page stuff : https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/q1' element={<Q1/>} />
        <Route path='/q2' element={<Q2/>} />
        <Route path='/q3' element={<Q3/>} />
        <Route path='/q4' element={<Q4/>} />
        <Route path='/q5' element={<Q5/>} />
        <Route path='/q6' element={<Q6/>} />
        <Route path='/q7' element={<Q7/>} />
        <Route path='/q8' element={<Q8/>} />
        <Route path='/q9' element={<Q9/>} />
        <Route path='/q10' element={<Q10/>} />




    </Routes>
    </Router>
);
}
  
export default App;