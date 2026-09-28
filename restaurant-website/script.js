// =========================
// ORDER MODAL
// =========================

const orderButtons = document.querySelectorAll(".menu-card button");

const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

const selectedFood = document.getElementById("selectedFood");
const selectedPrice = document.getElementById("selectedPrice");

const confirmOrder = document.getElementById("confirmOrder");

const customerName = document.getElementById("customerName");
const quantity = document.getElementById("quantity");


// Open popup
orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;

        const foodName =
            card.querySelector("h3").textContent;

        const price =
            card.querySelector(".price").textContent;

        selectedFood.textContent =
            "🍽️ " + foodName;

        selectedPrice.textContent =
            "💰 " + price;

        orderModal.style.display = "flex";

    });

});


// Close popup
closeModal.addEventListener("click", function() {

    orderModal.style.display = "none";

});


// Confirm order
confirmOrder.addEventListener("click", function() {

    const name = customerName.value;
    const qty = quantity.value;

    if (name === "") {

        alert("Please enter your name.");

        return;
    }

    alert(
        "🎉 Order Confirmed!\n\n" +
        "👤 Name: " + name + "\n" +
        "🍽️ " + selectedFood.textContent + "\n" +
        "🔢 Quantity: " + qty
    );

    orderModal.style.display = "none";

    customerName.value = "";
    quantity.value = "1";

});
// =========================
// SHOPPING CART
// =========================

const cart = [];

const addButtons = document.querySelectorAll(".add-cart");

const cartButton = document.getElementById("cartButton");
const cartBox = document.getElementById("cartBox");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");


// Add item
addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;

        const name = card.querySelector("h3").textContent;

        const priceText = card.querySelector(".price").textContent;

        const price = parseFloat(
            priceText.replace("$", "")
        );

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        alert(name + " added to cart! 🛒");

    });

});


// Update cart
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total = total + item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>

            <button class="remove-item"
                onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent = cart.length;

    cartTotal.textContent =
        "Total: $" + total.toFixed(2);
}


// Remove item
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// Open cart
cartButton.addEventListener("click", function() {

    cartBox.style.display = "block";

});


// Close cart
closeCart.addEventListener("click", function() {

    cartBox.style.display = "none";

});
// =========================
// CHECKOUT
// =========================

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckout =
    document.getElementById("closeCheckout");

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");


// Open checkout
checkoutButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty! 🛒");

        return;
    }

    let itemsText = "";

    let total = 0;

    cart.forEach(function(item) {

        itemsText +=
            "🍽️ " +
            item.name +
            " - $" +
            item.price.toFixed(2) +
            "<br>";

        total += item.price;

    });

    checkoutItems.innerHTML = itemsText;

    checkoutTotal.textContent =
        "Total: $" + total.toFixed(2);

    checkoutModal.style.display = "flex";

});


// Close checkout
closeCheckout.addEventListener("click", function() {

    checkoutModal.style.display = "none";

});


// Place order
checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("checkoutName").value;

    alert(
        "🎉 Order Placed Successfully!\n\n" +
        "Thank you, " + name + "!\n" +
        "Your order has been received."
    );

    checkoutModal.style.display = "none";

    checkoutForm.reset();

    cart.length = 0;

    updateCart();

    cartBox.style.display = "none";

});
// =========================
// MOBILE NAVBAR
// =========================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});