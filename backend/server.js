const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// =========================
// MIDDLEWARE
// =========================

app.use(cors());
app.use(express.json());

// =========================
// MONGODB CONNECTION
// =========================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully 🌱");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

// =========================
// ROUTES
// =========================

app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

// =========================
// TEST ROUTES
// =========================

app.get("/", (req, res) => {
  res.send("Evergreen Nursery Backend is Running 🌱");
});

app.get("/hello", (req, res) => {
  res.send("HELLO WORKING ✅");
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});