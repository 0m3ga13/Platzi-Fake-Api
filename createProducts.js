const fs = require("fs");

// Function to generate a random number within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate 50 product records
const generateProducts = () => {
  const products = [];
  for (let i = 51; i <= 100; i++) {
    const product = {
      id: i,
      title: `Product ${i}`,
      price: getRandomNumber(10, 1000),
      description: `Description for Product ${i}`,
      categoryId: getRandomNumber(1, 5),
      images: [`https://placeimg.com/640/480/any?product=${i}`],
    };
    products.push(product);
  }
  return products;
};

// Save product data to a JSON file
const saveToJSONFile = (data, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
};

// Generate and save 50 products to a JSON file
const products = generateProducts();
saveToJSONFile(products, "products.json");
console.log("Products saved to products.json");
