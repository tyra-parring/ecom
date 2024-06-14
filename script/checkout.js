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
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('[id^="add-to-cart-button"]');
    const cartItemsList = document.getElementById("cart-items");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const itemContainer = button.closest(".coat");
            const itemName = itemContainer.querySelector("h2").textContent;
            const itemPrice = itemContainer.getAttribute("data-price");
            const itemColor = itemContainer.getAttribute("data-color");

            const cartItem = document.createElement("li");
            cartItem.textContent = `${itemName} - ${itemColor} - R${itemPrice}`;

            cartItemsList.appendChild(cartItem);

            button.textContent = "Added to Cart";
            button.disabled = true; 

            calculateTotal();
        });
    });

    function calculateTotal() {
        const cartItems = cartItemsList.querySelectorAll("li");
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.textContent.split("R")[1]);
            total += price;
        });
        console.log("Total Price: R" + total);
    }
});
