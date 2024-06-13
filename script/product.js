//navbar movement on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("footer").classList.add("sticky");
  } else {
    document.getElementById("footer").classList.remove("sticky");
  }
}

//navbar visiblity
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//coat to cart
const coats = document.querySelectorAll('.coat');

coats.forEach(coat => {
    coat.addEventListener('click', () => {
        const price = coat.dataset.price;
        const color = coat.dataset.color;
        alert(`You selected a ${color} coat for ${price}`);
    });
});

// Define an array to store cart items
let cartItems = [];

// Function to add item to cart
function addToCart(item) {
    cartItems.push(item);
    // Optionally, you can update the UI to reflect the changes in the cart
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    // You can update the UI to display the cart items count or any other relevant information
    console.log('Cart updated:', cartItems);
}

// Add click event listeners to "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('.coat button[type="submit"]');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Find the parent coat element
        const coat = event.target.closest('.coat');
        // Extract relevant data from the coat element
        const price = coat.dataset.price;
        const color = coat.dataset.color;
        // Create an object representing the selected item
        const selectedItem = { price, color };
        // Add the selected item to the cart
        addToCart(selectedItem);
    });
});
