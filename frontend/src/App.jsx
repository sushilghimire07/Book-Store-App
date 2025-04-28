import React from 'react';
import {Navbar} from './component/Navbar'
import {Banner} from './component/Banner'
import {Footer} from './component/Footer'
import { Freebook } from './component/Freebook';

const App = () => {
  return (
    <>
     <Navbar/>
     <Banner />
     <Freebook/>
     <Footer/>
    </>
  )
}

export default App