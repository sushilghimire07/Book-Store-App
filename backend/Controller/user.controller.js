import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup=async (req,res) =>{
    
    try{
 
        const {fullname,email,password} = req.body;

        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exist..!!"})

        }
        const hashpassword = await bcryptjs.hash(password,10);
        const createdUser = new User({
            fullname,
            email,
            password:hashpassword
        })
        await createdUser.save();
        res.status(200).json({message:"User created sucessfully..!!"})

    }catch(e){
         console.log("Error : "+e);
         res.status(500).json({message:"Internal server error..!!"})

    }

}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password..!!" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password..!!" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (e) {
        console.log("Error : " + e);
        res.status(500).json({ message: "Internal server error..!!" });
    }
}

