import React from 'react';
import Home from './Home/Home';
import Cources from './Cources/Cources'
import { Route,Routes,Router } from 'react-router-dom'



const App = () => {
  return (
    <>
     {/* <Home/> */}

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cource' element={<Cources/>}></Route>
      
     </Routes>
    </>
  )
}

export default App