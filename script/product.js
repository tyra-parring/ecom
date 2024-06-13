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

function addToCart(button) {
  let itemName = button.parentElement.querySelector('h2').textContent;
  let price = button.parentElement.querySelector('p').textContent.split(' ')[1];
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({ name: itemName, price: price });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  button.textContent = 'Added to Cart';
  button.disabled = true;
  window.location.href = "cart.html";
}

function updateCartDisplay() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let cartList = document.getElementById('cart-items');
  let totalPrice = 0;
  cartList.innerHTML = '';
  cartItems.forEach(item => {
      let li = document.createElement('li');
      li.textContent = `${item.name} - R${item.price}`;
      cartList.appendChild(li);
      totalPrice += parseFloat(item.price);
  });
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

window.onload = updateCartDisplay;
