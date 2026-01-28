import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error("Get Books Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
