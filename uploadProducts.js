const fs = require("fs");
const axios = require("axios");

// Function to read data from a JSON file
const readJSONFile = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return [];
  }
};

// API endpoint
const apiUrl = "https://api.escuelajs.co/api/v1/products/";

// Function to create a product
const createProduct = async (productData) => {
  try {
    const response = await axios.post(apiUrl, productData);
    if (response.status === 201) {
      console.log("Product created successfully");
    } else {
      console.log(`Failed to create product. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

// Replace 'path/to/your/products.json' with the actual file path
const productsFilePath = "./products.json";

// Read product data from the JSON file
const products = readJSONFile(productsFilePath);

// Create products using the data from the JSON file
const createProductsFromJSON = async () => {
  for (const productData of products) {
    await createProduct(productData);
  }
};

// Start creating products
createProductsFromJSON();
