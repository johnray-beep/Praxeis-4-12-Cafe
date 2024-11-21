document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const addToOrderButtons = document.querySelectorAll(".product button");

    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Initialize cart from localStorage

    // Function to add an item to the cart
    function addToCart(productName, price, imageUrl) {
        cart.push({ name: productName, price: price, image: imageUrl });
        localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
    }

    // Attach click events to "Add to Order" buttons
    addToOrderButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = productElement.querySelector("p").textContent;
            const productImage = productElement.querySelector("img").src;

            addToCart(productName, productPrice, productImage);
            alert(`${productName} has been added to your cart.`);
        });
    });

    // Redirect to cart page on cart icon click
    cartIcon.addEventListener("click", () => {
        window.location.href = "cart.htmlw"; // Redirect to cart.html
    });
});
