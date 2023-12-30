let quantityElement = document.querySelector('.quantity');
let totalAmountElement = document.querySelector('.total-amount');
let addButton = document.querySelector('.btn-primary');
let subtractButton = document.querySelector('.btn-secondary');
let likeButton = document.querySelector('.btn-like');

let quantity = 0;
let totalPrice = 0;
let liked = false;
let itemPrice = 10; // Set the initial price for the item

// Function to adjust quantity
function adjustQuantity(operation) {
    if (operation === '+') {
        quantity++;
        totalPrice += itemPrice;
    } else if (operation === '-' && quantity > 0) {
        quantity--;
        totalPrice -= itemPrice;
    }

    updateQuantityDisplay();
    updateTotalPriceDisplay();
}

// Function to update quantity display
function updateQuantityDisplay() {
    quantityElement.textContent = quantity;
}

// Function to toggle like
function toggleLike() {
    liked = !liked;
    updateLikeButton();
}

// Function to update like button
function updateLikeButton() {
    if (liked) {
        likeButton.style.color = 'red';
    } else {
        likeButton.style.color = 'black';
    }
}

// Function to update total price display
function updateTotalPriceDisplay() {
    totalAmountElement.textContent = totalPrice;
}

// Event listener for the add button
addButton.addEventListener('click', function () {
    adjustQuantity('+');
});

// Event listener for the subtract button
subtractButton.addEventListener('click', function () {
    adjustQuantity('-');
});

// Event listener for the like button
likeButton.addEventListener('click', function () {
    toggleLike();
});