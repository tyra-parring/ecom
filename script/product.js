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

// function showSpinner() {
//   document.getElementById('spinner').style.display = 'block';
// }

// function hideSpinner() {
//   document.getElementById('spinner').style.display = 'none';
// }

//coat to cart
// const coats = document.querySelectorAll('.coat');

// coats.forEach(coat => {
//     coat.addEventListener('click', () => {
//         const price = coat.dataset.price;
//         const color = coat.dataset.color;
//         const coatData = { color, price };
//         // alert(`You selected a ${color} coat for ${price}`);
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//         cart.push(coatData);
    
//         localStorage.setItem('cart', JSON.stringify(cart));
//         console.log('Local storage set:', localStorage.getItem('cart'));
    
//         alert(`You selected a ${color} coat for ${price}`);
//     });
// });

// Constructor function for the shopping cart
// document.addEventListener('DOMContentLoaded', function() {

//   function ShoppingCart() {
    
//     this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//     this.addToCart = function(button) {
//       let itemName = button.closest('.coat').querySelector('h2').textContent;
//       let priceText = button.closest('.coat').querySelector('p').textContent.trim();
//       let price = parseFloat(priceText.split(' ')[1]); 
//       this.cartItems.push({ name: itemName, price: price });
//       localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
//       button.textContent = 'Added to Cart';
//       button.disabled = true;
//       this.updateCartDisplay(); 
//     };

//     this.updateCartDisplay = function() {
//       let cartList = document.getElementById('cart-items');
//       let totalPrice = 0;
//       cartList.innerHTML = '';
//       this.cartItems.forEach(item => {
//         let li = document.createElement('li');
//         let itemPrice = parseFloat(item.price); // Parse item price as a float
//         li.textContent = `${item.name} - R${itemPrice.toFixed(2)}`; // Update price display
//         cartList.appendChild(li);
//         totalPrice += itemPrice; // Add parsed item price to total price
//       });
//       document.getElementById('total-price').textContent = totalPrice.toFixed(2);
//     };
//   }

//   const shoppingCart = new ShoppingCart();

//   document.querySelectorAll('.coat button').forEach(button => {
//     button.addEventListener('click', function() {
//       shoppingCart.addToCart(this);
//     });
//   });

//   window.onload = function() {
//     shoppingCart.updateCartDisplay();
//   };
// });

document.addEventListener('DOMContentLoaded', function() {

  function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
  }

  function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
  }

  function addToCart(button) {
    showSpinner();

    setTimeout(function() {
      let itemName = button.closest('.coat').querySelector('h2').textContent;
      let priceText = button.closest('.coat').querySelector('p').textContent.trim();
      let price = parseFloat(priceText.split(' ')[1]); 
      this.cartItems.push({ name: itemName, price: price });
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      button.textContent = 'Added to Cart';
      button.disabled = true;
      updateCartDisplay();

      hideSpinner();
    }, 900); // Replace 1000 with your desired delay time in milliseconds
  }

  function updateCartDisplay() {
    let cartList = document.getElementById('cart-items');
    let totalPrice = 0;
    cartList.innerHTML = '';
    this.cartItems.forEach(item => {

  function addToCart(button) {
  let itemName = button.parentElement.querySelector('h2').textContent;
  let price = button.parentElement.querySelector('p').textContent.split(' ')[1];
  let cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [];
  cartItems.push({ name: itemName, price: price });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  button.textContent = 'Added to Cart';
  button.disabled = true;
  window.location.href = "checkout.html";
}

function updateCartDisplay() {
  let cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [];
  let cartList = document.getElementById('cart-items');
  let totalPrice = 0;
  cartList.innerHTML = '';
  cartItems.forEach(item => {

      let li = document.createElement('li');
      li.textContent = `${item.name} - R${item.price.toFixed(2)}`; 
      cartList.appendChild(li);
      totalPrice += parseFloat(item.price);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
  }

  document.getElementById('store').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName == 'BUTTON') {
      addToCart(event.target);
    }
  });

  window.onload = function() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartDisplay();
  };
});
