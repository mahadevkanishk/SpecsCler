import express from "express";

const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getSpecsProducts,
  getGogglesProducts,
} from "../controllers/productController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

//@desc fetch all products
//@route Get /api/products
//@access Public(MATLAB bahut sare routes mein token jata hai jisme kuch kuch user ko hi access therefore ye public hai)

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/specs", getSpecsProducts);
router.get("/goggles", getGogglesProducts);
router.get("/top", getTopProducts);
//@desc fetch single products
//@route Get /api/products
//@access Public(MATLAB bahut sare routes mein token jata hai jisme kuch kuch user ko hi access therefore ye public hai)

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
