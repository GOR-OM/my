import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './component/Home1';
import Companies from './component/Companies.jsx';
import About from './component/About';
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUpPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home1 />} />
        {/* <Route path='/login' element={<LogIn />} /> */}
        <Route path='/companies' element={<Companies />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

