const products = [
    { id: 1, name: "Laptop", price: 800, image: "laptop.jpg" },
    { id: 2, name: "Phone", price: 500, image: "phone.jpg" },
    { id: 3, name: "Headphones", price: 100, image: "headphones.jpg" }
];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
let cart = [];

function displayProducts() {
    productContainer.innerHTML = "";
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<li class="list-group-item">${item.name} - $${item.price} 
        <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(${index})">Remove</button></li>`;
    });
    totalPrice.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("checkout").addEventListener("click", () => {
    alert("Checkout feature is coming soon!");
});

displayProducts();
