// =========================
// ORDER MODAL 🍽️
// =========================

const orderButtons = document.querySelectorAll(".order-button");

const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

const selectedFood = document.getElementById("selectedFood");
const selectedPrice = document.getElementById("selectedPrice");

const confirmOrder = document.getElementById("confirmOrder");

const customerName = document.getElementById("customerName");
const quantity = document.getElementById("quantity");


// OPEN ORDER POPUP
orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".menu-card");

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


// CLOSE ORDER POPUP
closeModal.addEventListener("click", function() {

    orderModal.style.display = "none";

});


// CONFIRM ORDER
confirmOrder.addEventListener("click", function() {

    const name = customerName.value.trim();
    const qty = quantity.value;

    if (name === "") {

        alert("Please enter your name.");

        return;
    }

    alert(
        "🎉 Order Confirmed!\n\n" +
        "👤 Name: " + name + "\n" +
        selectedFood.textContent + "\n" +
        "🔢 Quantity: " + qty
    );

    orderModal.style.display = "none";

    customerName.value = "";
    quantity.value = "1";

});


// =========================
// SHOPPING CART 🛒
// =========================

// ONE CART ONLY
let cart = [];

const addButtons = document.querySelectorAll(".add-cart");

const cartButton = document.getElementById("cartButton");
const cartBox = document.getElementById("cartBox");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");


// =========================
// ADD TO CART
// =========================

// =========================
// ADD TO CART WITH QUANTITY
// =========================

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".menu-card");

        const name =
            card.querySelector("h3").textContent;

        const priceText =
            card.querySelector(".price").textContent;

        const price =
            parseFloat(priceText.replace("$", ""));


        // Ask quantity
        let quantity = prompt(
            "How many " + name + " would you like?"
        );


        // Cancel
        if (quantity === null) {
            return;
        }


        // Convert to number
        quantity = parseInt(quantity);


        // Check quantity
        if (isNaN(quantity) || quantity < 1) {

            alert("Please enter a valid quantity.");

            return;
        }


        // Add item
        cart.push({
            name: name,
            price: price,
            quantity: quantity
        });


        updateCart();


        alert(
            quantity +
            " × " +
            name +
            " added to cart! 🛒"
        );

    });

});


// =========================
// UPDATE CART
// =========================

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

            <button
                class="remove-item"
                onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);

    });


    // CART COUNT
    cartCount.textContent = cart.length;


    // CART TOTAL
    cartTotal.textContent =
        "Total: $" + total.toFixed(2);

}


// =========================
// REMOVE ITEM
// =========================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// =========================
// OPEN CART
// =========================

cartButton.addEventListener("click", function() {

    cartBox.style.display = "block";

});


// =========================
// CLOSE CART
// =========================

closeCart.addEventListener("click", function() {

    cartBox.style.display = "none";

});


// =========================
// CHECKOUT 🧾
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


// =========================
// OPEN CHECKOUT
// =========================

checkoutButton.addEventListener("click", function() {

    // Check cart
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

        total = total + item.price;

    });


    checkoutItems.innerHTML = itemsText;

    checkoutTotal.textContent =
        "Total: $" + total.toFixed(2);


    checkoutModal.style.display = "flex";

});


// =========================
// CLOSE CHECKOUT
// =========================

closeCheckout.addEventListener("click", function() {

    checkoutModal.style.display = "none";

});


// =========================
// PLACE ORDER
// =========================

checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("checkoutName").value;


    alert(
        "🎉 Order Placed Successfully!\n\n" +
        "Thank you, " + name + "!\n" +
        "Your order has been received."
    );


    // Close checkout
    checkoutModal.style.display = "none";


    // Reset form
    checkoutForm.reset();


    // Empty cart
    cart.length = 0;


    // Update cart
    updateCart();


    // Close cart box
    cartBox.style.display = "none";

});


// =========================
// MOBILE NAVBAR 📱
// =========================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// =========================
// MENU CATEGORIES 🍕🍔
// =========================

function showCategory(category) {

    const categories = document.querySelectorAll(".food-category");

    // Hide all categories
    categories.forEach(function(item) {
        item.classList.remove("active");
    });

    const selectedCategory = document.getElementById(category);

    if (selectedCategory) {

        // Restart animation every time
        void selectedCategory.offsetWidth;

        selectedCategory.classList.add("active");

        selectedCategory.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
const menuData = {
    pizza: [
        {
            name: "Margherita Pizza",
            image: "YOUR_PIZZA_IMAGE_URL"
        },
        {
            name: "Pepperoni Pizza",
            image: "YOUR_PIZZA_IMAGE_URL"
        },
        {
            name: "Cheese Pizza",
            image: "YOUR_PIZZA_IMAGE_URL"
        }
    ],

    burger: [
        {
            name: "Classic Burger",
            image: "YOUR_BURGER_IMAGE_URL"
        },
        {
            name: "Cheese Burger",
            image: "YOUR_BURGER_IMAGE_URL"
        }
    ],

    pasta: [
        {
            name: "Italian Pasta",
            image: "YOUR_PASTA_IMAGE_URL"
        }
    ],

    drinks: [
        {
            name: "Fresh Juice",
            image: "YOUR_DRINK_IMAGE_URL"
        }
    ]
};

function showMenu(category) {

    const container = document.getElementById("menu-items");

    container.innerHTML = "";

    menuData[category].forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "menu-item";

        card.style.animationDelay = `${index * 0.3}s`;

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
        `;

        container.appendChild(card);
    });
}