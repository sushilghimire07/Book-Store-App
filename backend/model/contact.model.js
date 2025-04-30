import mongoose from "mongoose";
import validator from 'validator'

const contactSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
       minLength:[3," Name contain at least 3 character..!!"],
       maxLength:[30," Name cannot exceed 30 character..!!"]
      },
     
       email:{
           type:String,
           required:true,
           validate:[validator.isEmail,"Provide a valid Email..!!"],
       },
       subject:{
           type:String,
           required:true,
       },
       message:{
        type:String,
        required:true,
    },
       time:{
           type:String,
           required:true
       },
       date:{
           type:String,
           required:true,
       }
   }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;