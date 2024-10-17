import express from "express";
const router = express.Router();
import { sendEmail } from "../utils/sendEmail.js";

router.get("/", async (req, res) => {
  res.json({
    success: true,
    message: "Welcome to my project",
  });
});

router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields",
    });
  }
  try {
    await sendEmail({
        // email on which the mail will go
      email: "bhaskarranawat06@gmail.com",
      subject: "Gym website contact",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      messahe: "Internal server error",
    });
  }
});

export default router;
