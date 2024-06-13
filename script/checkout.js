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

//adding products to cart
let cart = {};

function addToCart(productId, productName, price) {
    if (cart[productId]) {
        cart[productId].quantity++;
    } else {
        cart[productId] = {
            name: productName,
            price: price,
            quantity: 1
        };
    }

    updateCartSummary();
}

function removeFromCart(productId) {
  if (cart[productId]) {
      delete cart[productId];
  }

  updateCartSummary();
}

function updateQuantity(productId, quantity) {
  if (cart[productId]) {
      cart[productId].quantity = quantity;
  }

  updateCartSummary();
}

function updateCartSummary() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';

    let totalPrice = 0;
    for (const productId in cart) {
        const product = cart[productId];
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} x ${product.quantity} = $${product.price * product.quantity}`;
        cartItemsElement.appendChild(listItem);
        totalPrice += product.price * product.quantity;
    }

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', () => {
        addToCart('product-1', 'Product 1', 19.99);
    });
});

const removeButton = document.getElementById('remove-button');
    removeButton.addEventListener('click', () => {
        removeFromCart('product-1');
    });

    const quantityInput = document.getElementById('quantity-input');
    quantityInput.addEventListener('change', () => {
        updateQuantity('product-1', parseInt(quantityInput.value));
    });