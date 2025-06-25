// Fetch product data from products.json and display it in the correct section
fetch("products.json")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const section = document.getElementById(product.category);
      if (section) {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.price}</p>
          <a href="${product.link}" target="_blank">Buy on Amazon</a>
        `;
        section.appendChild(card);
      }
    });
  })
  .catch(error => console.error("Error loading products:", error));
