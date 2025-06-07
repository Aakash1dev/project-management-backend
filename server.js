const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/auth"));
app.use("/api/preferences", require("./routes/preferences"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
