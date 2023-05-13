import express from "express";

const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

//@desc fetch all products
//@route Get /api/products
//@access Public(MATLAB bahut sare routes mein token jata hai jisme kuch kuch user ko hi access therefore ye public hai)

router.route("/").get(getProducts);

//@desc fetch single products
//@route Get /api/products
//@access Public(MATLAB bahut sare routes mein token jata hai jisme kuch kuch user ko hi access therefore ye public hai)

router.route("/:id").get(getProductById);

export default router;
