document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const cartCount = document.getElementById('cart-count');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function renderProducts() {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="viewProduct(${product.id})">View Details</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    renderProducts();
    updateCartCount();
});

// Make addToCart and viewProduct functions available globally
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};

window.viewProduct = function(productId) {
    const product = products.find(p => p.id === productId);
    localStorage.setItem('currentProduct', JSON.stringify(product));
    window.location.href = 'product_detail.html';
};

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('product_detail.html')) {
        const productDetailContainer = document.getElementById('product-detail');
        const product = JSON.parse(localStorage.getItem('currentProduct'));

        if (product) {
            productDetailContainer.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.longDescription}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
        } else {
            productDetailContainer.innerHTML = '<p>Product not found.</p>';
        }
    }
});

// Payment form submission
document.getElementById('payment-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment processing not implemented.');
});
