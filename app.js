document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("productForm");
  const productGrid = document.getElementById("productGrid");

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value).toFixed(2);
    const imageUrl = document.getElementById("productImage").value;

    addProductToGrid(name, price, imageUrl);
    productForm.reset();
  });

  function addProductToGrid(name, price, imageUrl) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <h3>${name}</h3>
      <p>$${price}</p>
      <button class="delete-btn">Eliminar</button>
    `;

    const deleteButton = productCard.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      productCard.remove();
    });

    productGrid.appendChild(productCard);
  }
});

