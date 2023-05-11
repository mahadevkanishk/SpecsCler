import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

//@desc fetch all products
//@route Get /api/products
//@access Public(MATLAB bahut sare routes mein token jata hai jisme kuch kuch user ko hi access therefore ye public hai)

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc fetch single products
//@route Get /api/products
//@access Public(MATLAB bahut sare routes mein token jata hai jisme kuch kuch user ko hi access therefore ye public hai)

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
export default router;
