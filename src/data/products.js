import snake from "../assets/products/snake-plant.jpg";
import money from "../assets/products/money-plant.jpg";
import zz from "../assets/products/zz-plant.jpg";
import areca from "../assets/products/areca-palm.jpg";

import rose from "../assets/products/rose-plant.jpg";
import hibiscus from "../assets/products/hibiscus.jpg";
import bougainvillea from "../assets/products/bougainvillea.jpg";
import jasmine from "../assets/products/jasmine.jpg";

import peace from "../assets/products/peace-lily.jpg";
import marigold from "../assets/products/marigold.jpg";
import lavender from "../assets/products/lavender.jpg";
import petunia from "../assets/products/petunia.jpg";

import tomatoSeeds from "../assets/products/tomato-seeds.jpg";
import sunflowerSeeds from "../assets/products/sunflower-seeds.jpg";
import corianderSeeds from "../assets/products/coriander-seeds.jpg";
import basilSeeds from "../assets/products/Basil-Seeds.jpg";

import ceramicPot from "../assets/products/ceramic-pot.jpg";
import terracottaPot from "../assets/products/terracotta-pot.jpg";
import plasticPot from "../assets/products/plastic-pot.jpg";
import hangingPot from "../assets/products/hanging-pot.jpg";

import cocopeatBrick from "../assets/products/cocopeat-brick.jpg";
import perlite from "../assets/products/perlite.jpg";
import vermiculite from "../assets/products/vermiculite.jpg";
import peatMoss from "../assets/products/peat-moss.jpg";

import organicCompost from "../assets/products/organic-compost.jpg";
import vermicompost from "../assets/products/vermicompost.jpg";
import npkFertilizer from "../assets/products/npk-fertilizer.jpg";
import boneMeal from "../assets/products/bone-meal-fertilizer.jpg";

import gardenTrowel from "../assets/products/garden-trowel.jpg";
import pruningShear from "../assets/products/pruning-shear.jpg";
import wateringCan from "../assets/products/watering-can.jpg";
import gardeningGloves from "../assets/products/gardening-gloves.jpg";
const products = [
     {
    id: 1,
    name: "Snake Plant",
    price: 1250,
    category: "Indoor Plants",
    image: snake,

  images: [
    snake,
    snake
  ],
    sunlight: "Indirect Sunlight",
    watering: "Once a Week",
    stock: "In Stock",
    description: "A low-maintenance indoor plant perfect for homes and offices."
  },
  {
    id: 2,
    name: "Money Plant",
    price: 850,
    category: "Indoor Plants",
    image: money,
    images: [
     money,
     money
  ],
    sunlight: "Indirect Sunlight",
    watering: "Twice a Week",
    stock: "In Stock",
    description: "A popular indoor plant that brings freshness and greenery."
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 2200,
    category: "Indoor Plants",
    image: zz,
    images: [
     zz,
     zz
  ],
    sunlight: "Low Light",
    watering: "Every 10 Days",
    stock: "In Stock",
    description: "A stylish indoor plant that needs very little maintenance."
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 3500,
    category: "Indoor Plants",
    image: areca,
    images: [
     areca,
     areca
  ],
    sunlight: "Bright Indirect Light",
    watering: "Twice a Week",
    stock: "In Stock",
    description: "A beautiful air-purifying palm for homes and offices."
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 950,
    category: "Outdoor Plants",
    image: rose,
    images: [
     rose,
     rose
  ],
    sunlight: "Full Sun",
    watering: "Daily",
    stock: "In Stock",
    description: "A colorful flowering plant perfect for gardens."
  },
  {
    id: 6,
    name: "Hibiscus",
    price: 1100,
    category: "Outdoor Plants",
    image: hibiscus,
    images: [
     hibiscus,
     hibiscus
  ],
    sunlight: "Full Sun",
    watering: "Daily",
    stock: "In Stock",
    description: "A vibrant flowering shrub with large attractive blooms."
  },
    {
    id: 7,
    name: "Bougainvillea",
    price: 1800,
    category: "Outdoor Plants",
    image: bougainvillea,
    images: [
     bougainvillea,
     bougainvillea
  ],
    sunlight: "Full Sun",
    watering: "Every 2 Days",
    stock: "In Stock",
    description: "A hardy outdoor plant with vibrant colorful flowers."
  },
  {
    id: 8,
    name: "Jasmine",
    price: 1300,
    category: "Outdoor Plants",
    image: jasmine,
    images: [
     jasmine,
    jasmine
  ],
    sunlight: "Full Sun",
    watering: "Daily",
    stock: "In Stock",
    description: "A fragrant flowering plant loved for its sweet aroma."
  },
  {
    id: 9,
    name: "Peace Lily",
    price: 2000,
    category: "Flowering Plants",
    image: peace,
    images: [
     peace,
     peace
  ],
    sunlight: "Partial Shade",
    watering: "Twice a Week",
    stock: "In Stock",
    description: "An elegant flowering plant that also purifies indoor air."
  },
  {
    id: 10,
    name: "Marigold",
    price: 650,
    category: "Flowering Plants",
    image: marigold,
    images: [
     marigold,
     marigold
  ],
    sunlight: "Full Sun",
    watering: "Daily",
    stock: "In Stock",
    description: "Bright and cheerful flowers that bloom throughout the season."
  },
  {
    id: 11,
    name: "Lavender",
    price: 2500,
    category: "Flowering Plants",
    image: lavender,
    images: [
    lavender,
    lavender
  ],
    sunlight: "Full Sun",
    watering: "Twice a Week",
    stock: "In Stock",
    description: "Aromatic flowering plant with calming fragrance."
  },
  {
    id: 12,
    name: "Petunia",
    price: 900,
    category: "Flowering Plants",
    image: petunia,
    images: [
      petunia,
      petunia
  ],
    sunlight: "Full Sun",
    watering: "Daily",
    stock: "In Stock",
    description: "A colorful flowering plant perfect for gardens and pots."
  },
  {
  id: 13,
  name: "Tomato Seeds",
  price: 350,
  category: "Seeds",
  image: tomatoSeeds,
  images: [
     tomatoSeeds,
    tomatoSeeds
  ],
  sunlight: "Full Sun",
  watering: "Regular",
  stock: "In Stock",
  description: "High-quality tomato seeds suitable for home gardens."
},
{
  id: 14,
  name: "Sunflower Seeds",
  price: 300,
  category: "Seeds",
  image: sunflowerSeeds,
  images: [
     sunflowerSeeds,
    sunflowerSeeds
  ],
  sunlight: "Full Sun",
  watering: "Moderate",
  stock: "In Stock",
  description: "Premium sunflower seeds with high germination rate."
},
{
  id: 15,
  name: "Coriander Seeds",
  price: 250,
  category: "Seeds",
  image: corianderSeeds,
  images: [
    corianderSeeds,
     corianderSeeds
  ],
  sunlight: "Partial Sun",
  watering: "Regular",
  stock: "In Stock",
  description: "Fresh coriander seeds ideal for kitchen gardening."
},
{
  id: 16,
  name: "Basil Seeds",
  price: 280,
  category: "Seeds",
  image: basilSeeds,
  images: [
     basilSeeds,
     basilSeeds
  ],
  sunlight: "Full Sun",
  watering: "Regular",
  stock: "In Stock",
  description: "Aromatic basil seeds perfect for herbs and home gardens."
},
{
  id: 17,
  name: "Ceramic Pot",
  price: 950,
  category: "Pots & Planters",
  image: ceramicPot,
  images: [
     ceramicPot,
     ceramicPot
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "A stylish ceramic pot perfect for indoor and outdoor plants."
},
{
  id: 18,
  name: "Terracotta Pot",
  price: 650,
 category: "Pots & Planters",
  image: terracottaPot,
  images: [
     terracottaPot,
     terracottaPot
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Classic terracotta pot with excellent drainage for healthy roots."
},
{
  id: 19,
  name: "Plastic Pot",
  price: 350,
  category: "Pots & Planters",
  image: plasticPot,
  images: [
    plasticPot,
     plasticPot
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Lightweight and durable plastic pot suitable for all plants."
},
{
  id: 20,
  name: "Hanging Pot",
  price: 750,
  category: "Pots & Planters",
  image: hangingPot,
  images: [
     hangingPot,
     hangingPot
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Elegant hanging pot ideal for balconies and indoor decoration."
},
{
  id: 21,
  name: "Cocopeat Brick",
  price: 450,
  category: "Cocopeat",
  image: cocopeatBrick,
  images: [
     cocopeatBrick,
    cocopeatBrick
  ],
  sunlight: "Not Required",
  watering: "Use as Growing Medium",
  stock: "In Stock",
  description: "Compressed cocopeat brick that improves soil moisture retention."
},
{
  id: 22,
  name: "Perlite",
  price: 550,
  category: "Cocopeat",
  image: perlite,
  images: [
     perlite,
 perlite
  ],
  sunlight: "Not Required",
  watering: "Use in Potting Mix",
  stock: "In Stock",
  description: "Lightweight growing medium that improves soil aeration and drainage."
},
{
  id: 23,
  name: "Vermiculite",
  price: 600,
  category: "Cocopeat",
  image: vermiculite,
  images: [
     vermiculite,
     vermiculite
  ],
  sunlight: "Not Required",
  watering: "Use in Potting Mix",
  stock: "In Stock",
  description: "High-quality vermiculite for better moisture retention and root growth."
},
{
  id: 24,
  name: "Peat Moss",
  price: 850,
  category: "Cocopeat",
  image: peatMoss,
  images: [
      peatMoss,
     peatMoss
  ],
  sunlight: "Not Required",
  watering: "Use in Potting Mix",
  stock: "In Stock",
  description: "Premium peat moss that enriches soil and supports healthy plant growth."
},
{
  id: 25,
  name: "Organic Compost",
  price: 750,
  category: "Fertilizers",
  image: organicCompost,
  images: [
     organicCompost,
     organicCompost
  ],
  sunlight: "Not Required",
  watering: "Apply Every 15 Days",
  stock: "In Stock",
  description: "Natural organic compost that improves soil fertility and plant growth."
},
{
  id: 26,
  name: "Vermicompost",
  price: 850,
  category: "Fertilizers",
  image: vermicompost,
  images: [
     vermicompost,
 vermicompost
  ],
  sunlight: "Not Required",
  watering: "Apply Every 15 Days",
  stock: "In Stock",
  description: "Nutrient-rich vermicompost made from organic earthworm castings."
},
{
  id: 27,
  name: "NPK Fertilizer",
  price: 950,
  category: "Fertilizers",
  image: npkFertilizer,
  images: [
     npkFertilizer,
    npkFertilizer
  ],
  sunlight: "Not Required",
  watering: "Apply Monthly",
  stock: "In Stock",
  description: "Balanced NPK fertilizer for healthy roots, leaves, and flowers."
},
{
  id: 28,
  name: "Bone Meal Fertilizer",
  price: 650,
  category: "Fertilizers",
  image: boneMeal,
  images: [
     boneMeal,
      boneMeal
  ],
  sunlight: "Not Required",
  watering: "Apply Monthly",
  stock: "In Stock",
  description: "Organic bone meal fertilizer rich in phosphorus for stronger roots."
},
{
  id: 29,
  name: "Garden Trowel",
  price: 550,
  category: "Gardening Tools",
  image: gardenTrowel,
  images: [
    gardenTrowel,
    gardenTrowel
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Durable hand trowel for digging, planting, and transplanting."
},
{
  id: 30,
  name: "Pruning Shear",
  price: 1200,
  category: "Gardening Tools",
  image: pruningShear,
  images: [
    pruningShear,
     pruningShear
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Sharp pruning shear for trimming branches and maintaining plants."
},
{
  id: 31,
  name: "Watering Can",
  price: 950,
  category: "Gardening Tools",
  image: wateringCan,
  images: [
     wateringCan,
    wateringCan
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Lightweight watering can with a fine spray for healthy watering."
},
{
  id: 32,
  name: "Gardening Gloves",
  price: 450,
  category: "Gardening Tools",
  image: gardeningGloves,
  images: [
     gardeningGloves,
    gardeningGloves
  ],
  sunlight: "Not Required",
  watering: "Not Required",
  stock: "In Stock",
  description: "Comfortable protective gloves for safe and easy gardening."
}
];

export default products;