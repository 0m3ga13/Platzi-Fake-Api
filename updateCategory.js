const apiUrl = "https://api.escuelajs.co/api/v1/categories/1"; // Replace '3' with the actual category ID you want to update
const requestData = {
  name: "Clothes", // The new name you want to set for the category
};

fetch(apiUrl, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Category updated successfully:", data);
  })
  .catch((error) => {
    console.error("Error updating category:", error);
  });
