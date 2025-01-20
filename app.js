document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("productForm");
  const productList = document.getElementById("productList");

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value).toFixed(2);
    const imageUrl = document.getElementById("productImage").value;

    addProductToList(name, price, imageUrl);
    productForm.reset();
  });

  function addProductToList(name, price, imageUrl) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <h3>${name}</h3>
      <p>$${price}</p>
      <button class="delete-btn">Delete</button>
    `;

    const deleteButton = productCard.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      productCard.remove();
    });

    productList.appendChild(productCard);
  }
});
