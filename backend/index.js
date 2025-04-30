import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'


dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
const mongodburi = process.env.MongoDBURI;


const port = process.env.PORT || 4000;

try{
   
  mongoose.connect(mongodburi);
  console.log("Connected to databse sucesfully..!!")

}catch(e){
    console.log("Error: "+e)

}
//define route
app.use('/book',bookRoute)
app.use('/user',userRoute)



app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})
