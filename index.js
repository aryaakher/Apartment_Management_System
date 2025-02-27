// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // Triggers DB connection

const app = express();
app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/payments", require("./routes/payments"));
app.use("/api/complaints", require("./routes/complaints"));
app.use("/api/maintenance", require("./routes/maintenance"));
// Add more routes (properties, notices, etc.) as needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
