import express from "express";

import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
