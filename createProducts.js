const fs = require("fs");

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateParagraph = () => {
  return "Introducing the QuantumGlow™ LED Smart Bulb - the future of lighting technology at your fingertips. This cutting-edge smart bulb seamlessly combines energy efficiency, convenience, and style to elevate your home or office space. With its user-friendly mobile app, you can effortlessly control brightness levels, set schedules, and even choose from millions of vibrant colors to suit your mood or occasion. QuantumGlow™ is compatible with popular voice assistants like Alexa and Google Home, allowing for hands-free operation and integration into your smart home ecosystem. Its long-lasting LED technology not only reduces energy consumption but also ensures years of reliable performance, making it an environmentally conscious choice. Transform your space with QuantumGlow™ and experience the perfect fusion of innovation and illumination.";
};

const getUnsplashImageUrl = (productId) => {
  return `https://source.unsplash.com/random/1600x900?${encodeURIComponent(
    "product" + productId
  )}`;
};

// Generate 100 product records
const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const product = {
      id: i,
      title: `Product ${i}`,
      price: getRandomNumber(10, 1000),
      description: generateParagraph(),
      categoryId: getRandomNumber(1, 5),
      images: [getUnsplashImageUrl(i)],
    };
    products.push(product);
  }
  return products;
};

// Save product data to a JSON file
const saveToJSONFile = (data, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
};

// Generate and save 100 products to a JSON file
const products = generateProducts();
saveToJSONFile(products, "products.json");
console.log("Products saved to products.json");
