import React from 'react';
import Home from './Home/Home';
import Cources from './Cources/Cources'
import { Route,Routes,Router } from 'react-router-dom'
import Signup from './component/Signup';



const App = () => {
  return (
    <>
     {/* <Home/> */}

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cource' element={<Cources/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      
     </Routes>
    </>
  )
}

export default App