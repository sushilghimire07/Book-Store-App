
import Contact from '../model/contact.model.js';

export const contact = async (req, res) => {
  try {
    const { name, email, subject, message, date, time } = req.body;

    const newContact = new Contact({ name, email, subject, message, date, time });
    await newContact.save();

    res.status(200).json({ message: "Contact saved successfully!" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error!" });
  }
};
