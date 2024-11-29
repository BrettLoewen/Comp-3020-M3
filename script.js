// ===== Data =====

// Array for holding the user's cart
let cart = [];

// Define the merchant data

const merchantData = [
    {
        id: "subway",
        displayName: "SUBWAY",
        items: [
            {
                name: "Pizza Sub Melt",
                calories: 220,
                price: 8.49,
                Image: "images/pizzasub.jpeg",
            },
            {
                name: "BLT",
                calories: 220,
                price: 8.49,
                Image: "images/blt.jpg",
            },
            {
                name: "Tuna",
                calories: 400,
                price: 8.49,
                Image: "images/tuna.webp",
            },
            {
                name: "Pepsi",
                calories: 300,
                price: 4.49,
                Image: "images/pepsi.png",
            },
            {
                name: "Cookies",
                calories: 350,
                price: 4.99,
                Image: "images/cookies.jpg",
            },
            {
                name: "Item X",
                calories: 500,
                price: 9.99,
                Image: "images/subitx.jpg",
            },
            {
                name: "Item Y",
                calories: 500,
                price: 9.99,
                Image: "images/subity.jpg",
            },
        ],
    },
    {
        id: "nuburger",
        displayName: "NUBURGER",
        items: [
            {
                name: "Item A",
                calories: 400,
                price: 8.99,
                Image: "images/nitem1.jpg",
            },
            {
                name: "Item B",
                Image: "nitem1",
                calories: 500,
                price: 8.99,
                Image: "images/nitem2.webp",
            },
            {
                name: "Item C",
                Image: "nitem1",
                calories: 300,
                price: 7.99,
                Image: "images/nitem3.jpg",
            },
            {
                name: "Item D",
                Image: "nitem1",
                calories: 600,
                price: 9.99,
                Image: "images/nitem4.jpg",
            },
            {
                name: "Item E",
                Image: "nitem1",
                calories: 400,
                price: 5.99,
                Image: "images/nitem5.jpg",
            },
            {
                name: "Item F",
                Image: "nitem1",
                calories: 200,
                price: 4.99,
                Image: "images/nitem6.webp",
            },
            {
                name: "Item G",
                Image: "nitem1",
                calories: 250,
                price: 4.99,
                Image: "images/nitem7.webp",
            },
        ],
    },
    {
        id: "booster-juice",
        displayName: "BOOSTER JUICE",
        items: [
            {
                name: "Item A",
                calories: 200,
                price: 5.99,
                Image: "images/bj1.webp",
            },
            {
                name: "Item B",
                calories: 200,
                price: 5.99,
                Image: "images/bj2.webp",
            },
            {
                name: "Item C",
                calories: 300,
                price: 8.99,
                Image: "images/bj3.jpg",
            },
            {
                name: "Item D",
                calories: 500,
                price: 15.99,
                Image: "images/bj4.jpg",
            },
            {
                name: "Item E",
                calories: 500,
                price: 15.99,
                Image: "images/bj5.png",
            },
            {
                name: "Item F",
                calories: 400,
                price: 9.99,
                Image: "images/bj6.jpg",
            },
            {
                name: "Item G",
                calories: 500,
                price: 9.99,
                Image: "images/bj7.jpg",
            },
        ],
    },
    {
        id: "freshii",
        displayName: "FRESHII",
        items: [
            {
                name: "Item A",
                calories: 300,
                price: 5.99,
                Image: "images/fi1.jpeg",
            },
            {
                name: "Item B",
                calories: 200,
                price: 4.99,
                Image: "images/fi2.jpg",
            },
            {
                name: "Item C",
                calories: 500,
                price: 5.99,
                Image: "images/fi3.jpg",
            },
            {
                name: "Item D",
                calories: 400,
                price: 6.99,
                Image: "images/fi4.jpeg",
            },
            {
                name: "Item E",
                calories: 500,
                price: 7.99,
                Image: "images/fi5.jpeg",
            },
            {
                name: "Item F",
                calories: 700,
                price: 12.99,
                Image: "images/fi6.jpeg",
            },
            {
                name: "Item G",
                calories: 500,
                price: 7.99,
                Image: "images/fi7.jpg",
            },
        ],
    },
];

// Define the cuisine data
const cuisineData = [
    { name: "Pizza", logo: "images/pizza.jpg" },
    { name: "Mexican", logo: "images/mexican.jpg" },
    { name: "Indian", logo: "images/indian.jpg" },
    { name: "Chinese", logo: "images/chinese.jpg" },
    { name: "Greek", logo: "images/greek.jpeg" },
    { name: "French", logo: "images/french.jpg" },
    { name: "American", logo: "images/american.webp" },
    // Add more cuisines as needed
];

// Given a merchant id, return the merchant data object
function getMerchant(merchantId) {
    let merchantObject = { displayName: "Test" };

    merchantData.forEach((merchant) => {
        if (merchant.id === merchantId) {
            merchantObject = merchant;
        }
    });

    return merchantObject;
}

// ===== Top Bar =====

const calorieInput = document.getElementById("calorie-input");
const step = parseInt(calorieInput.step);

function incrementCalorieInput() {
    calorieInput.value = parseInt(calorieInput.value) + step;

    updateCalorieProgressBar();
}

function decrementCalorieInput() {
    calorieInput.value = parseInt(calorieInput.value) - step;

    updateCalorieProgressBar();
}

function onCalorieInputChange() {
    updateCalorieProgressBar();
}

const searchBar = document.getElementById("search-bar");
const calorieProgressBar = document.getElementById("calorie-progress-bar");
const calorieProgressFill = document.getElementById("calorie-progress-fill");

// Turn on the search bar and turn off the calorie bar
function enableSearchBar() {
    searchBar.style.display = "flex";
    calorieProgressBar.style.display = "none";
}

// Turn on the calorie bar, update its values, and turn off the search bar
function enableCalorieProgressBar() {
    searchBar.style.display = "none";
    calorieProgressBar.style.display = "flex";

    updateCalorieProgressBar();
}

// Update the calorie progress bar based on the items in the user's cart and the calorie limit
function updateCalorieProgressBar() {
    let caloriesInCart = 0;
    cart.forEach((item) => {
        caloriesInCart += item.calories * item.count;
    });

    const percentage = (caloriesInCart / calorieInput.value) * 100;

    calorieProgressFill.style.width = `${percentage}%`;
}

function calorieProgressSearch() {
    showToast("The search option has not been implemented for this prototype");
}

function openProfile() {
    showToast("The Profile page has not been implemented for this prototype");
}

// ===== Popups =====

const overlay = document.getElementById("popup-overlay");
const popupDailyPick = document.getElementById("popup-daily-pick");
const popupPreferences = document.getElementById("popup-preferences");
const popupOrder = document.getElementById("popup-order");

// Open the pick of the day popup and make the overlay close the popup when clicked
function openDailyPick() {
    overlay.style.display = "block";
    popupDailyPick.style.display = "flex";

    overlay.onclick = closeDailyPick;
}

function closeDailyPick() {
    overlay.style.display = "none";
    popupDailyPick.style.display = "none";
}

const calorieItemInput = document.getElementById("calorie-item-input");

// Open the preferences popup and make the overlay close the popup when clicked
function openPreferences() {
    overlay.style.display = "block";
    popupPreferences.style.display = "flex";

    overlay.onclick = closePreferences;
}

function closePreferences() {
    overlay.style.display = "none";
    popupPreferences.style.display = "none";
}

// Open the order confirmation popup and make the overlay close the popup when clicked
function openOrder() {
    overlay.style.display = "block";
    popupOrder.style.display = "flex";

    overlay.onclick = closeOrder;

    // Calculate the price of the cart and display that to the user
    const costText = document.getElementById("text-cost-order");
    let totalCost = 0;
    cart.forEach((item) => {
        totalCost += item.price * item.count;
    });
    costText.textContent = `TOTAL: \$${totalCost.toFixed(2)}`;
}

function closeOrder() {
    overlay.style.display = "none";
    popupOrder.style.display = "none";
}

function showToast(message) {
    // Create a new toast element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    // Add the toast to the container
    const container = document.getElementById("toast-container");
    container.appendChild(toast);

    // Remove the toast after 2 seconds
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// ===== Page Management =====

// Get all the pages and start the site on the home page
const pages = document.querySelectorAll("[id*='page']");
const backButton = document.getElementById("back-button");
let currentMerchantPage = "";
openHomePage(true);

// ===== Home Page =====

// Open the home page
function openHomePage(firstTime) {
    // Not on a merchant page, so reset the stored value
    currentMerchantPage = "";

    // Turn off all pages
    pages.forEach((page) => {
        page.style.display = "none";
    });

    // Turn on the home page
    const homePage = document.getElementById("page-home");
    homePage.style.display = "block";

    // Turn off the back button
    backButton.style.display = "none";

    // Turn on the search bar
    enableSearchBar();

    // Reference the container where the cuisines will be added
    const cuisineContainer = document.getElementById("list-cuisine");

    // Generate HTML for each cuisine and append it to the container
    cuisineData.forEach((cuisine) => {
        const cuisineItem = document.createElement("div");
        cuisineItem.classList.add("cuisine-item");

        // Create the logo image
        const cuisineLogo = document.createElement("img");
        cuisineLogo.src = cuisine.logo;
        cuisineLogo.alt = `${cuisine.name} Cuisine`;
        cuisineLogo.classList.add("cuisine-logo");

        // Create the name paragraph
        const cuisineName = document.createElement("p");
        cuisineName.textContent = cuisine.name;
        cuisineName.classList.add("cuisine-name");

        // Append logo and name to the cuisine item
        cuisineItem.appendChild(cuisineLogo);
        cuisineItem.appendChild(cuisineName);

        // Append the cuisine item to the container
        cuisineContainer.appendChild(cuisineItem);
    });

    // If the user should see the pick of the day popup, show it to them
    if (firstTime) {
        openDailyPick();
    }
}

// ===== Merchant Page =====

let addedCalorieInputFunctions = false;

// Open the merchant page and set it up for the passed merchant id
function openMerchantPage(merchantId) {
    // Store the current merchant page
    currentMerchantPage = merchantId;

    // Turn off all pages
    pages.forEach((page) => {
        page.style.display = "none";
    });

    // Turn on the calorie progress bar
    enableCalorieProgressBar();

    // Get the data for this merchant
    const merchant = getMerchant(merchantId);

    // Turn on the merchant page
    const merchantPage = document.getElementById("page-merchant");
    merchantPage.style.display = "block";

    // Set the header text for the merchant
    const merchantHeader = document.getElementById("header-merchant");
    merchantHeader.textContent = merchant.displayName;

    // Add listeners to the calorie limit controls so the item list can refresh if the limit changes
    if (!addedCalorieInputFunctions) {
        const calorieInputIncrement = document.getElementById(
            "calorie-input-increment"
        );
        const calorieInputDecrement = document.getElementById(
            "calorie-input-decrement"
        );

        // Add the listeners
        calorieInputIncrement.addEventListener("click", () => {
            if (currentMerchantPage !== "") {
                setupMerchantItems(merchant);
            }
        });
        calorieInputDecrement.addEventListener("click", () => {
            if (currentMerchantPage !== "") {
                setupMerchantItems(merchant);
            }
        });
        calorieInput.addEventListener("change", () => {
            if (currentMerchantPage !== "") {
                setupMerchantItems(merchant);
            }
        });

        // Ensure this only happens once
        addedCalorieInputFunctions = true;
    }

    // Setup the items the merchant offers
    setupMerchantItems(merchant);

    // Setup the items in the user's cart
    setupCartItems();
}

// Create new children for the item list using the merchant data
function setupMerchantItems(merchant) {
    // Get the element that holds the list of items that this merchant sells
    const merchantItemList = document.getElementById("list-items");

    // Remove all children from the list element
    while (merchantItemList.firstChild) {
        merchantItemList.removeChild(merchantItemList.firstChild);
    }

    // Calorie limits
    const calorieLimitPerItem = calorieItemInput.value;

    // Calculate total calories in the cart
    let caloriesInCart = 0;
    cart.forEach((cartItem) => {
        caloriesInCart += cartItem.calories * cartItem.count;
    });

    // Create the items
    merchant.items.forEach((item) => {
        // Create the container for the item
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-merchant";

        // Add the item's image if available
        if (item.Image) {
            const itemImage = document.createElement("img");
            itemImage.src = item.Image; // Path or URL of the image
            itemImage.alt = `${item.name} Image`;
            itemImage.className = "item-image"; // Add class for styling
            itemDiv.appendChild(itemImage);
        }

        // Show the item's name
        const nameText = document.createElement("p");
        nameText.textContent = item.name;
        nameText.className = "item-name";
        itemDiv.appendChild(nameText);

        // Show the item's calorie count
        const calorieText = document.createElement("p");
        calorieText.textContent = `${item.calories} Calories`;
        calorieText.className = "item-calories";
        itemDiv.appendChild(calorieText);

        // Show the item's cost
        const priceText = document.createElement("p");
        priceText.textContent = `\$${item.price.toFixed(2)}`;
        priceText.className = "item-price";
        itemDiv.appendChild(priceText);

        // Check calorie limits and display warnings
        const overItemLimit =
            calorieLimitPerItem !== "" && item.calories > calorieLimitPerItem;
        const overTotalLimit =
            item.calories + caloriesInCart > calorieInput.value;

        if (overItemLimit) {
            const overLimitText = document.createElement("p");
            overLimitText.textContent = "OVER ITEM LIMIT";
            overLimitText.className = "over-limit-warning";
            itemDiv.appendChild(overLimitText);
        } else if (overTotalLimit) {
            const overLimitText = document.createElement("p");
            overLimitText.textContent = "OVER TOTAL LIMIT";
            overLimitText.className = "over-limit-warning";
            itemDiv.appendChild(overLimitText);
        }

        // Create the add-to-cart button for the item
        const addCartButton = document.createElement("button");
        addCartButton.textContent = "Add to Cart";
        addCartButton.className = "add-cart-button";
        addCartButton.onclick = function () {
            addToCart(item);
        };

        itemDiv.appendChild(addCartButton);

        // Append the item to the list
        merchantItemList.appendChild(itemDiv);
    });
}

// Create new children for the user's cart using their cart data
function setupCartItems() {
    // Get the element that holds the list of items in the user's cart
    const cartItemList = document.getElementById("scroll-list-merchant-cart");

    // Remove all children from the cart list element
    while (cartItemList.firstChild) {
        cartItemList.removeChild(cartItemList.firstChild);
    }

    // Create the items in the cart
    cart.forEach((item) => {
        // Create a container for the cart item
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";

        // Show the item's name
        const nameText = document.createElement("p");
        nameText.textContent = `${item.name} (x${item.count})`;
        nameText.className = "cart-item-name";
        itemDiv.appendChild(nameText);

        // Add a remove button for the item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-cart-button";
        removeButton.onclick = function () {
            removeFromCart(item);
        };
        itemDiv.appendChild(removeButton);

        // Append the cart item to the list
        cartItemList.appendChild(itemDiv);
    });

    // Calculate the price of the cart and display that to the user
    const costText = document.getElementById("text-cost-merchant");
    let totalCost = 0;
    cart.forEach((item) => {
        totalCost += item.price * item.count;
    });
    costText.textContent = `TOTAL: \$${totalCost.toFixed(2)}`;

    // Turn on the back button so users can go back to the home page
    backButton.style.display = "block";
    backButton.onclick = function () {
        openHomePage(false);
    };
}

// Add the passed item to the user's cart
function addToCart(item) {
    // Check if the item already exists in the cart
    const existingCartItem = cart.find(
        (cartItem) => cartItem.name === item.name
    );

    if (existingCartItem) {
        // If item exists, increase its count
        existingCartItem.count += 1;
    } else {
        // Otherwise, add the item with an initial count of 1
        cart.push({ ...item, count: 1 });
    }

    // Update the calorie bar
    updateCalorieProgressBar();

    // Refresh the merchant page to update the cart UI
    openMerchantPage(currentMerchantPage);
}

// Remove an item from the user's cart or decrease its count
function removeFromCart(item) {
    // Find the item in the cart
    const existingCartItem = cart.find(
        (cartItem) => cartItem.name === item.name
    );

    if (existingCartItem) {
        // Decrease the count of the item
        existingCartItem.count -= 1;

        // If count reaches 0, remove the item from the cart
        if (existingCartItem.count === 0) {
            cart = cart.filter((cartItem) => cartItem.name !== item.name);
        }
    }

    // Update the calorie bar
    updateCalorieProgressBar();

    // Refresh the merchant page to update the cart UI
    openMerchantPage(currentMerchantPage);
}

// ===== Cart Page =====

// Open the cart page and set it up based on the items in the user's cart
function openCartPage() {
    // Turn off all pages
    pages.forEach((page) => {
        page.style.display = "none";
    });

    // Turn on the cart page
    const cartPage = document.getElementById("page-cart");
    cartPage.style.display = "block";

    // Turn on the calorie progress bar
    enableCalorieProgressBar();

    // Get the element that holds the list of items in the user's cart
    const cartItemList = document.getElementById("scroll-list-cart");

    // Remove all children from the cart list element
    while (cartItemList.firstChild) {
        cartItemList.removeChild(cartItemList.firstChild);
    }

    // Create new children for the user's cart using their cart data
    cart.forEach((item) => {
        for (let i = 0; i < item.count; i++) {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = item.name;
            itemDiv.className = "item-cart";
            cartItemList.appendChild(itemDiv);
        }
    });

    // Calculate the price of the cart and display that to the user
    const costText = document.getElementById("text-cost-cart");
    let totalCost = 0;
    cart.forEach((item) => {
        totalCost += item.price * item.count;
    });
    costText.textContent = `TOTAL: \$${totalCost.toFixed(2)}`;

    // Turn on the back button so users can go back to the home page or to the merchant page they came from
    backButton.style.display = "block";
    backButton.onclick = function () {
        if (currentMerchantPage === "") {
            openHomePage(false);
        } else {
            openMerchantPage(currentMerchantPage);
        }
    };
}

// Empty the cart and return to the homepage with a popup confirming the order
function payNow() {
    // Only let the user pay if they have items in their cart
    if (cart.length === 0) {
        return;
    }

    // Return to the homepage now that the cart has been ordered
    openHomePage(false);

    // Open a popup so the user can confirm their cart was ordered
    openOrder();

    // Clear the cart now that the user has ordered it
    cart.length = 0;
}
