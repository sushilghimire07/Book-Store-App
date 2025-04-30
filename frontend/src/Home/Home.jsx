import React from 'react'
import Navbar from './../component/Navbar'
import {Banner} from './../component/Banner'
import {Footer} from './../component/Footer'
import { Freebook } from './../component/Freebook';
import Course from '../component/Course';

const Home = () => {
  return (
        <>
            <Navbar/>
             <Banner />
             <Freebook/>
             <Footer/>
          
        </>
    )
}

export default Home