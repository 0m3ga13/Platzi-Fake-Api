const axios = require("axios");

// API endpoint to get products with the title "diaper"
const apiUrlGet = "https://api.escuelajs.co/api/v1/products/?title=diaper";

// Function to get product IDs with the title "diaper"
const getProductIdsToDelete = async () => {
  try {
    const response = await axios.get(apiUrlGet);
    if (response.status === 200) {
      const products = response.data;
      const productIds = products.map((product) => product.id);
      return productIds;
    } else {
      console.log(`Failed to fetch products. Status code: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Delete products by their IDs
const deleteProductsByIds = async (productIds) => {
  const apiUrlDelete = "https://api.escuelajs.co/api/v1/products/Product";

  for (const productId of productIds) {
    try {
      const response = await axios.delete(`${apiUrlDelete}${productId}`);
      if (response.status === 200) {
        console.log(`Product with ID ${productId} deleted successfully`);
      } else {
        console.log(
          `Failed to delete product with ID ${productId}. Status code: ${response.status}`
        );
      }
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  }
};

// Main function to get and delete products
const main = async () => {
  const productIdsToDelete = await getProductIdsToDelete();
  if (productIdsToDelete.length > 0) {
    await deleteProductsByIds(productIdsToDelete);
  } else {
    console.log("No products found with this title");
  }
};

// Run the main function
main();
