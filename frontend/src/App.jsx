import React from 'react';
import Home from './Home/Home';
import Cources from './Cources/Cources'
import { Route,Routes,Router, Navigate } from 'react-router-dom'
import Signup from './component/Signup';
import Contact from './Contact/Contact';
import About from './About/About';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


const App = () => {
   
  const [ authUser, setAuthUser ] = useAuth();

  return (
    <>
     {/* <Home/> */}

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={authUser?<Cources/>:<Navigate to='/signup'/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
     <Toaster />
    </>
  )
}

export default App