import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  try {
    const { name, email, subject, message, date, time } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required.",
      });
    }

    const contactData = new Contact({
      name,
      email,
      subject,
      message,
      date,
      time,
    });

    await contactData.save();

    return res.status(201).json({
      success: true,
      message: "Contact saved successfully!",
    });
  } catch (error) {
    console.error("Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};
