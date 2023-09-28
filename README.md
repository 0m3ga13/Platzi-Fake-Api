# Product Data Upload Scripts

## Overview

This set of scripts allows you to upload product data to [Platzi Fake Store API](https://fakeapi.platzi.com/) using Axios in JavaScript (Node.js). It reads product information from a JSON file and sends POST requests to the API to create products.

The API endpoint for uploading the data is [https://api.escuelajs.co/api/v1/products/](https://api.escuelajs.co/api/v1/products/).

## Usage

1. Make sure you have Node.js installed on your machine.

2. Replace `'path/to/your/products.json'` in the scripts with the actual file path to your JSON data file. Ensure that the JSON file contains an array of product objects.

3. Run the scripts using Node.js:

- To create products from a JSON file:

  ```
  node createProducts.js
  ```

  Replace `createProducts.js` with the name of your script file if it's different.

- To upload products to the API:
  ```
  node uploadProducts.js
  ```
  Replace `uploadProducts.js` with the name of your script file if it's different.

4. The `createProducts.js` script will generate product data and save it to a JSON file, while the `uploadProducts.js` script will read the product data from the JSON file and send POST requests to the API for each product, creating them in the system.

## Script Details

- `createProducts.js`: This script generates random product data and saves it to a JSON file for testing purposes.

- `uploadProducts.js`: The main script file that reads data from the JSON file and sends POST requests to the API.

- `products.json`: The JSON file containing product data. Replace this with your own product data in the specified format.

## Notes

- Ensure that the API endpoint and the product data format in `products.json` match the requirements of the API you're working with.

- This script does not include error handling for cases like rate limiting, network issues, or API validation errors. You may need to enhance it to handle such situations in a production environment.

- Always be mindful of API usage policies and rate limits when making a large number of requests to an API.

- Make sure to keep your API credentials and sensitive information secure.

Feel free to customize the scripts to suit your specific needs and requirements.
