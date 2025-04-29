import Book from "../model/book.model.js";
export const getBook  = async(req,res)=>{

    try{

   const book = await Book.find();
   await res.status(200).json(book);

    }catch(e){
      console.log("Error:"+e);
      res.status(500).json(e);
    }
}
