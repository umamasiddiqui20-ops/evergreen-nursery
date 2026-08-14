const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [

  // =========================
  // INDOOR PLANTS - 4
  // =========================

  {
    name: "Snake Plant",
    category: "Indoor Plants",
    description: "Low-maintenance indoor plant that improves your indoor space.",
    price: 1250,
    image: "/images/snake-plant.jpg",
    sunlight: "Indirect sunlight",
    watering: "Once a week",
    stock: 10,
  },

  {
    name: "Money Plant",
    category: "Indoor Plants",
    description: "Beautiful and easy-to-grow indoor plant.",
    price: 950,
    image: "/images/money-plant.jpg",
    sunlight: "Indirect sunlight",
    watering: "Once a week",
    stock: 10,
  },

  {
    name: "ZZ Plant",
    category: "Indoor Plants",
    description: "Hardy indoor plant perfect for beginners.",
    price: 1500,
    image: "/images/zz-plant.jpg",
    sunlight: "Low to indirect sunlight",
    watering: "Every 2 weeks",
    stock: 10,
  },

  {
    name: "Areca Palm",
    category: "Indoor Plants",
    description: "Elegant palm plant that adds a fresh tropical look.",
    price: 2200,
    image: "/images/areca-palm.jpg",
    sunlight: "Bright indirect sunlight",
    watering: "Twice a week",
    stock: 10,
  },


  // =========================
  // OUTDOOR PLANTS - 4
  // =========================

  {
    name: "Peace Lily",
    category: "Outdoor Plants",
    description: "Beautiful leafy plant that adds freshness to outdoor spaces.",
    price: 1300,
    image: "/images/peace-lily.jpg",
    sunlight: "Indirect sunlight",
    watering: "Once a week",
    stock: 10,
  },

  {
    name: "Bougainvillea Plant",
    category: "Outdoor Plants",
    description: "Bright and vibrant plant suitable for gardens and outdoor spaces.",
    price: 1100,
    image: "/images/bougainvillea.jpg",
    sunlight: "Full sunlight",
    watering: "3 times a week",
    stock: 10,
  },

  {
    name: "Hibiscus Plant",
    category: "Outdoor Plants",
    description: "Colorful plant perfect for outdoor gardens.",
    price: 900,
    image: "/images/hibiscus.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 10,
  },

  {
    name: "Jasmine Plant",
    category: "Outdoor Plants",
    description: "Fragrant plant that adds beauty and freshness to gardens.",
    price: 750,
    image: "/images/jasmine.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 10,
  },


  // =========================
  // FLOWERING PLANTS - 4
  // =========================

  {
    name: "Rose Plant",
    category: "Flowering Plants",
    description: "Beautiful flowering rose plant for your garden.",
    price: 850,
    image: "/images/rose-plant.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 10,
  },

  {
    name: "Lavender",
    category: "Flowering Plants",
    description: "Beautiful fragrant flowering plant.",
    price: 700,
    image: "/images/lavender.jpg",
    sunlight: "Full sunlight",
    watering: "2 times a week",
    stock: 10,
  },

  {
    name: "Marigold",
    category: "Flowering Plants",
    description: "Bright flowering plant perfect for gardens.",
    price: 500,
    image: "/images/marigold.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 10,
  },

  {
    name: "Petunia",
    category: "Flowering Plants",
    description: "Colorful flowering plant that adds beauty to your garden.",
    price: 650,
    image: "/images/petunia.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 10,
  },


  // =========================
  // SEEDS - 4
  // =========================

  {
    name: "Basil Seeds",
    category: "Seeds",
    description: "Quality basil seeds suitable for home gardening.",
    price: 120,
    image: "/images/Basil-Seeds.jpg",
    sunlight: "Bright sunlight",
    watering: "Daily",
    stock: 20,
  },

  {
    name: "Coriander Seeds",
    category: "Seeds",
    description: "Fresh coriander seeds for growing herbs at home.",
    price: 100,
    image: "/images/coriander-seeds.jpg",
    sunlight: "Bright sunlight",
    watering: "Daily",
    stock: 20,
  },

  {
    name: "Sunflower Seeds",
    category: "Seeds",
    description: "Easy-to-grow sunflower seeds for your home garden.",
    price: 180,
    image: "/images/sunflower-seeds.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 20,
  },

  {
    name: "Tomato Seeds",
    category: "Seeds",
    description: "Quality tomato seeds suitable for home gardening.",
    price: 150,
    image: "/images/tomato-seeds.jpg",
    sunlight: "Full sunlight",
    watering: "Daily",
    stock: 20,
  },


  // =========================
  // COCOPEAT - 4
  // =========================

  {
    name: "Cocopeat Brick",
    category: "Cocopeat",
    description: "Natural cocopeat brick for improving soil structure and moisture retention.",
    price: 250,
    image: "/images/cocopeat-brick.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Peat Moss",
    category: "Cocopeat",
    description: "Plant growing medium that helps retain moisture in soil.",
    price: 450,
    image: "/images/peat-moss.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Perlite",
    category: "Cocopeat",
    description: "Lightweight growing medium that improves soil aeration and drainage.",
    price: 400,
    image: "/images/perlite.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Vermiculite",
    category: "Cocopeat",
    description: "Useful growing medium that helps retain moisture for plants.",
    price: 450,
    image: "/images/vermiculite.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },


  // =========================
  // POTS & PLANTERS - 4
  // =========================

  {
    name: "Ceramic Plant Pot",
    category: "Pots & Planters",
    description: "Elegant ceramic pot perfect for indoor plants.",
    price: 650,
    image: "/images/ceramic-pot.jpg",
    sunlight: "",
    watering: "",
    stock: 15,
  },

  {
    name: "Hanging Pot",
    category: "Pots & Planters",
    description: "Stylish hanging pot for balconies and indoor spaces.",
    price: 850,
    image: "/images/hanging-pot.jpg",
    sunlight: "",
    watering: "",
    stock: 15,
  },

  {
    name: "Plastic Plant Pot",
    category: "Pots & Planters",
    description: "Lightweight and durable plastic pot for everyday gardening.",
    price: 300,
    image: "/images/plastic-pot.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Terracotta Pot",
    category: "Pots & Planters",
    description: "Classic terracotta pot suitable for indoor and outdoor plants.",
    price: 450,
    image: "/images/terracotta-pot.jpg",
    sunlight: "",
    watering: "",
    stock: 15,
  },


  // =========================
  // FERTILIZERS - 4
  // =========================

  {
    name: "Bone Meal Fertilizer",
    category: "Fertilizers",
    description: "Natural fertilizer that supports strong roots and healthy plant growth.",
    price: 500,
    image: "/images/bone-meal-fertilizer.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "NPK Fertilizer",
    category: "Fertilizers",
    description: "Balanced fertilizer to support healthy plant growth.",
    price: 550,
    image: "/images/npk-fertilizer.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Organic Compost",
    category: "Fertilizers",
    description: "Natural organic compost to improve soil fertility and plant growth.",
    price: 450,
    image: "/images/organic-compost.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Vermicompost",
    category: "Fertilizers",
    description: "Nutrient-rich organic fertilizer for healthy plant growth.",
    price: 500,
    image: "/images/vermicompost.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },


  // =========================
  // GARDENING TOOLS - 4
  // =========================

  {
    name: "Garden Trowel",
    category: "Gardening Tools",
    description: "Durable hand trowel for planting and transferring soil.",
    price: 450,
    image: "/images/garden-trowel.jpg",
    sunlight: "",
    watering: "",
    stock: 15,
  },

  {
    name: "Gardening Gloves",
    category: "Gardening Tools",
    description: "Comfortable gardening gloves for protecting your hands while gardening.",
    price: 350,
    image: "/images/gardening-gloves.jpg",
    sunlight: "",
    watering: "",
    stock: 20,
  },

  {
    name: "Pruning Shear",
    category: "Gardening Tools",
    description: "Sharp pruning shear for trimming plants and branches.",
    price: 750,
    image: "/images/pruning-shear.jpg",
    sunlight: "",
    watering: "",
    stock: 15,
  },

  {
    name: "Watering Can",
    category: "Gardening Tools",
    description: "Convenient watering can for indoor and outdoor plants.",
    price: 850,
    image: "/images/watering-can.jpg",
    sunlight: "",
    watering: "",
    stock: 15,
  },
];


// =========================
// SEED DATABASE
// =========================

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected 🌱");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Added Successfully ✅");
    console.log(`Total Products: ${products.length}`);

    await mongoose.connection.close();

    console.log("Database Connection Closed");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

seedDatabase();