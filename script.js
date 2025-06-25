fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-container");
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" target="_blank">Buy on Amazon</a>
      `;
      container.appendChild(card);
    });
  });