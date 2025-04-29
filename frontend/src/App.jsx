import React from 'react';
import Home from './Home/Home';
import Cources from './Cources/Cources'
import { Route,Routes,Router } from 'react-router-dom'
import Signup from './component/Signup';
import Contact from './Contact/Contact';
import About from './About/About';



const App = () => {
  return (
    <>
     {/* <Home/> */}

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cource' element={<Cources/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
    </>
  )
}

export default App