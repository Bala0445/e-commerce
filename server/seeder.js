// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Product from './models/Product.js';
// import connectDB from './config/db.js';

// dotenv.config();

// const products = [
//   {
//     name: "Ankle Leggings",
//     price: 299,
//     description: "Comfortable ankle-length leggings for casual and gym wear.",
//     image: "one.webp"
//   },
//   {
//     name: "Slim Fit Jeans",
//     price: 799,
//     description: "Stretchable denim jeans with a slim-fit design.",
//     image: "two.webp"
//   },
//   {
//     name: "Cotton T-Shirt",
//     price: 399,
//     description: "Soft 100% cotton T-shirt for all-day comfort.",
//     image: "three.jpeg"
//   },
//   {
//     name: "Printed Kurti",
//     price: 499,
//     description: "Beautiful floral printed kurti for women.",
//      image: "four.jpeg"
//   },
//   {
//     name: "Crop Top",
//     price: 349,
//     description: "Trendy crop top perfect for summer outings.",
//     image: "five.jpeg"
//   },
//   {
//     name: "Palazzo Pants",
//     price: 549,
//     description: "Comfortable wide-leg palazzo pants for women.",
//     image: "six.jpeg"
//   },
//   {
//     name: "Men’s Formal Shirt",
//     price: 699,
//     description: "Classic white shirt suitable for office and events.",
//     image: "seven.jpeg"
//   },
//   {
//     name: "Casual Shirt",
//     price: 649,
//     description: "Checkered cotton casual shirt for men.",
//     image: "eight.jpeg"
//   },
//   {
//     name: "Chiffon Saree",
//     price: 999,
//     description: "Elegant chiffon saree with matching blouse piece.",
//     image: "nine.jpeg"
//   },
//   {
//     name: "Party Gown",
//     price: 1599,
//     description: "Stylish full-length party gown for women.",
//     image: "ten.jpeg"
//   },
//   {
//     name: "Men’s Kurta",
//     price: 799,
//     description: "Traditional cotton kurta for festive occasions.",
//     image: "11.webp"
//   },
//   {
//     name: "Women’s Kurta Set",
//     price: 1099,
//     description: "Kurta with matching dupatta and palazzo.",
//     image: "12.avif"
//   },
//   {
//     name: "Men’s T-Shirt Combo",
//     price: 999,
//     description: "Pack of 3 plain cotton T-shirts for men.",
//     image: "13.webp"
//   },
//   {
//     name: "Women’s Top",
//     price: 499,
//     description: "Chiffon top with puff sleeves and button design.",
//     image: "14.webp"
//   },
//   {
//     name: "Jogger Pants",
//     price: 699,
//     description: "Comfort-fit joggers ideal for casual and gym wear.",
//     image: "15.webp"
//   },
//   {
//     name: "Short Skirt",
//     price: 599,
//     description: "Denim mini skirt for trendy casual outfits.",
//     image: "16.webp"
//   },
//   {
//     name: "Salwar Suit",
//     price: 1299,
//     description: "Traditional salwar suit with embroidery work.",
//     image: "17.webp"
//   },
//   {
//     name: "Sleeveless Tank Top",
//     price: 299,
//     description: "Cotton sleeveless top for summer days.",
//     image: "18.webp"
//   },
//   {
//     name: "Women’s Blazer",
//     price: 1499,
//     description: "Formal blazer for professional and semi-casual wear.",
//     image: "19.webp"
//   },
//   {
//     name: "Men’s Blazer",
//     price: 1899,
//     description: "Slim-fit formal blazer for men.",
//     image: "20.webp"
//   },
//   {
//     name: "Anarkali Dress",
//     price: 1399,
//     description: "Designer Anarkali dress with heavy border work.",
//     image: "21.webp"
//   },
//   {
//     name: "Cotton Shorts",
//     price: 399,
//     description: "Breathable cotton shorts for daily comfort.",
//     image: "22.webp"
//   },
//   {
//     name: "Polo T-Shirt",
//     price: 549,
//     description: "Classic polo shirt with collar design.",
//     image: "23.jpg"
//   },
//   {
//     name: "Winter Sweater",
//     price: 899,
//     description: "Woolen sweater to keep you warm in style.",
//     image: "24.webp"
//   },
//   {
//     name: "Hooded Jacket",
//     price: 1099,
//     description: "Zipper hoodie jacket for cold weather.",
//     image: "25.webp"
//   },
//   {
//     name: "Long Kurti",
//     price: 749,
//     description: "Long cotton kurti with block print design.",
//     image: "26.webp"
//   },
//   {
//     name: "Patiala Set",
//     price: 899,
//     description: "Traditional Punjabi Patiala suit for women.",
//     image: "27.jpg"
//   },
//   {
//     name: "Silk Saree",
//     price: 1599,
//     description: "Rich silk saree with zari border and blouse.",
//     image: "saree.jpeg"
//   },
//   {
//     name: "Men’s Cargo Pants",
//     price: 999,
//     description: "Multiple-pocket cargo pants for a rugged look.",
//     image: "21.webp"
//   },
//   {
//     name: "Party Wear Dress",
//     price: 1499,
//     description: "Shimmering gown perfect for parties and weddings.",
//     image: "30.webp"
//   },
//   {
//     name: "Kurta Pajama",
//     price: 899,
//     description: "Elegant kurta pajama set for men.",
//     image: "31.webp"
//   },
//   {
//     name: "Flared Skirt",
//     price: 699,
//     description: "Printed long flared skirt for festive wear.",
//     image: "32.webp"
//   },
//   {
//     name: "Dungaree Dress",
//     price: 999,
//     description: "Cute denim dungaree dress for women.",
//     image: "33.webp"
//   },
//   {
//     name: "Western Top",
//     price: 499,
//     description: "Trendy western-style top for daily wear.",
//     image: "34.webp"
//   },
//   {
//     name: "Evening Gown",
//     price: 1699,
//     description: "Elegant long gown with lace design.",
//     image: "35.webp"
//   },
//   {
//     name: "Kurta with Dupatta",
//     price: 999,
//     description: "Cotton kurta set with printed dupatta.",
//     image: "36.webp"
//   },
//   {
//     name: "Men’s Polo Combo",
//     price: 1299,
//     description: "Pack of 2 premium polo shirts.",
//     image: "37.webp"
//   },
//   {
//     name: "Women’s Shrug",
//     price: 599,
//     description: "Layered shrug for modern and casual look.",
//     image: "38.webp"
//   },
//   {
//     name: "Printed Trousers",
//     price: 749,
//     description: "Stylish printed trousers with elastic waist.",
//     image: "39.webp"
//   },
//   {
//     name: "Casual Dress",
//     price: 899,
//     description: "Everyday casual dress with floral patterns.",
//     image: "40.webp"
//   },
//   {
//     name: "Formal Pants",
//     price: 899,
//     description: "Slim-fit trousers for professional wear.",
//     image: "pants.webp"
//   },
//   {
//     name: "Tunic Top",
//     price: 499,
//     description: "Long tunic top with ethnic prints.",
//     image: "41.webp"
//   },
//   {
//     name: "Co-Ord Set",
//     price: 1299,
//     description: "Stylish co-ord set with crop top and pants.",
//     image: "42.webp"
//   },
//   {
//     name: "A-Line Dress",
//     price: 1099,
//     description: "Elegant A-line dress suitable for parties.",
//     image: "43.webp"
//   },
//   {
//     name: "Turtleneck Sweater",
//     price: 999,
//     description: "Warm turtleneck sweater for chilly days.",
//     image: "44.webp"
//   },
//   {
//     name: "Ethnic Long Gown",
//     price: 1499,
//     description: "Traditional long ethnic gown for functions.",
//     image: "45.webp"
//   }


// ];

// const importData = async () => {
//   try {
//     await connectDB();
//     console.log('✅ MongoDB Connected');

//     await Product.deleteMany();
//     console.log('🧹 Old products cleared');

//     await Product.insertMany(products);
//     console.log('✅ Sample products inserted successfully!');

//     process.exit(0);
//   } catch (error) {
//     console.error('❌ Error inserting products:', error);
//     process.exit(1);
//   }
// };

// importData();
import mongoose from "mongoose";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import Product from './models/Product.js';
// import connectDB from './config/db.js';

dotenv.config();
connectDB(); 

const products = [
  {name: "Ankle Leggings", price: 299, image: "one.webp"},
  {name: "Slim Fit Jeans", price: 799, image: "two.webp"},
  {name: "Cotton T-Shirt", price: 399, image: "three.jpeg"},
  {name: "Printed Kurti", price: 499, image: "four.jpeg"},
  {name: "Crop Top", price: 349, image: "five.jpeg"},
  {name: "Palazzo Pants", price: 549, image: "six.jpeg"},
  {name: "Men’s Formal Shirt", price: 699, image: "seven.jpeg"},
  {name: "Casual Shirt", price: 649, image: "eight.jpeg"},
  {name: "Chiffon Saree", price: 999, image: "nine.jpeg"},
  {name: "Party Gown", price: 1599, image: "ten.jpeg"},
  {name: "Men’s Kurta", price: 799, image: "11.webp"},
  {name: "Women’s Kurta Set", price: 1099, image: "12.avif"},
  {name: "Men’s T-Shirt Combo", price: 999, image: "13.webp"},
  {name: "Women’s Top", price: 499, image: "14.webp"},
  {name: "Jogger Pants", price: 699, image: "15.webp"},
  {name: "Short Skirt", price: 599, image: "16.webp"},
  {name: "Salwar Suit", price: 1299, image: "17.webp"},
  {name: "Sleeveless Tank Top", price: 299, image: "18.webp"},
  {name: "Women’s Blazer", price: 1499, image: "19.webp"},
  {name: "Men’s Blazer", price: 1899, image: "20.webp"},
  {name: "Anarkali Dress", price: 1399, image: "21.webp"},
  {name: "Cotton Shorts", price: 399, image: "22.webp"},
  {name: "Polo T-Shirt", price: 549, image: "23.jpg"},
  {name: "Winter Sweater", price: 899, image: "24.webp"},
  {name: "Hooded Jacket", price: 1099, image: "25.webp"},
  {name: "Long Kurti", price: 749, image: "26.webp"},
  {name: "Patiala Set", price: 899, image: "27.jpg"},
  {name: "Silk Saree", price: 1599, image: "saree.jpeg"},
  {name: "Men’s Cargo Pants", price: 999, image: "21.webp"},
  {name: "Party Wear Dress", price: 1499, image: "30.webp"},
  {name: "Kurta Pajama", price: 899, image: "31.webp"},
  {name: "Flared Skirt", price: 699, image: "32.webp"},
  {name: "Dungaree Dress", price: 999, image: "33.webp"},
  {name: "Western Top", price: 499, image: "34.webp"},
  {name: "Evening Gown", price: 1699, image: "35.webp"},
  {name: "Kurta with Dupatta", price: 999, image: "36.webp"},
  {name: "Men’s Polo Combo", price: 1299, image: "37.webp"},
  {name: "Women’s Shrug", price: 599, image: "38.webp"},
  {name: "Printed Trousers", price: 749, image: "39.webp"},
  {name: "Casual Dress", price: 899, image: "40.webp"},
  {name: "Formal Pants", price: 899, image: "pants.webp"},
  {name: "Tunic Top", price: 499, image: "41.webp"},
  {name: "Co-Ord Set", price: 1299, image: "42.webp"},
  {name: "A-Line Dress", price: 1099, image: "43.webp"},
  {name: "Turtleneck Sweater", price: 999, image: "44.webp"},
  {name: "Ethnic Long Gown", price: 1499, image: "45.webp"}

];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
