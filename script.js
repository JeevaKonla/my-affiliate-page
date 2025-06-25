document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            // Load products into respective sections
            loadProducts(data.topDeals, 'top-deals');
            loadProducts(data.newArrivals, 'new-arrivals');
            loadProducts(data.editorsPicks, 'editors-picks');
        })
        .catch(error => console.error('Error loading products:', error));
});

function loadProducts(products, sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">$${product.price}</div>
                <a href="${product.link}" class="product-link" target="_blank">View on Amazon</a>
            </div>
        </div>
    `).join('');
}
