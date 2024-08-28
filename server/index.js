/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// MongoDB connection string
const mongoURI =
  "mongodb+srv://sawan:cytZiJyW7u8yT0Eq@cluster0.hqhuq.mongodb.net/tempo_house"; // Replace with your MongoDB connection string

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define a schema and model for contact form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save to MongoDB
    await newContact.save();

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred. Please try again.", error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
