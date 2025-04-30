import React, { useEffect,useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
// import list from './../assets/list.json';
import axios from 'axios'


function Course() {

   const [book,setBook] = useState([]);
   useEffect(()=>{
    const getBook = async()=>{

      try{
        const res  = await axios.get('http://localhost:3000/book')
        // console.log(res.data)
        setBook(res.data)

      }catch(e){
       console.log(e)
      }
    }
    getBook();

   },[])


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
          Unlock your full potential by enrolling in our expertly designed courses. Whether you're looking to upskill for career advancement, explore new interests, or dive deep into a specific field, we’ve got the right course for you. Our courses are crafted to provide you with the tools, knowledge, and confidence to excel in today’s fast-paced world.
          </p>
          
        </div>
        
       <Link to={'/'}>
        <div className="flex justify-center mt-6">
                <button className=" cursor-pointer bg-pink-500 hover:bg-pink-600 text-white
                 font-semibold py-2 px-4 rounded-md transition duration-300">
                    Back to home
                </button>
            </div>
       </Link>

       
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                book.map((item) => (
                <Cards key={item.id} item={item} />
                ))
            }
        </div>

      </div>
    </>
  );
}

export default Course;
