import Product from "../models/product.model.js";

//test

// Generate Product ID
const generateProductID = async () => {
  const lastStockDetails = await Product.find().sort({ _id: -1 }).limit(1);

  if (lastStockDetails.length === 0) {
    return "PRD-1";
  }

  const lastID = lastStockDetails[0].cusProductID;
  const lastNumber = parseInt(lastID.split("-")[1]);
  const newIdNumber = lastNumber + 1;

  return `PRD-${newIdNumber}`;
};

// Add Product
export const addProduct = async (req, res) => {
  try {
    const proId = await generateProductID();

    const newProduct = new Product({
      cusProductID: proId,
      name: req.body.name,
      description: req.body.description,
      actualPrice: req.body.actualPrice,
      sellingPrice: req.body.sellingPrice,
      quantity: req.body.quantity,
      added_date: req.body.added_date,
      expire_date: req.body.expire_date,
      productImage: req.body.productImage,
    });
    const savedProduct = await newProduct.save();
    console.log(newProduct);
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ error: "Failed to add product", details: err.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find(); // Retrieve all product (not deleted by worker or admin) documents from the database

    res.status(200).json(product); // Send the product as the response
    console.log(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  const productId = req.params.id; // Get the product ID from the request parameters

  try {
    const product = await Product.findById(productId); // Find the product by its ID

    if (!product) {
      // If the product is not found, send a 404 status code with a message
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product); // Send the product details as the response
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
};

//Update products
export const updateProduct = async (req, res) => {
  const product_id = req.params.id;

  console.log(req.body);
  const updateFields = {
    name: req.body.name,
    description: req.body.description,
    actualPrice: req.body.actualPrice,
    sellingPrice: req.body.sellingPrice,
    quantity: req.body.quantity,
    added_date: req.body.added_date,
    expire_date: req.body.expire_date,
    productImage: req.body.productImage,
  };

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      product_id,
      updateFields,
      { new: true }
    );

    if (!updateProduct) {
      // If the product is not found, send a 404 status code with a message
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updateProduct); // Send the updated Product as the response
  } catch (error) {
    res.status(500).json({ message: "Failed to update Product", error });
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  const _id = req.params.id;

  try {
    const productDelete = await Product.findByIdAndDelete(_id);

    if (!productDelete) {
      // If the product is not found, send a 404 status code with a message
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Product", error });
  }
};
