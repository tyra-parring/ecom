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
    
//         // Add the selected coat to the cart
//         cart.push(coatData);
    
//         // Save the updated cart to local storage
//         localStorage.setItem('cart', JSON.stringify(cart));
//         console.log('Local storage set:', localStorage.getItem('cart'));
    
//         alert(`You selected a ${color} coat for ${price}`);
//     });
// });

// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchResults = document.getElementById('search-results');

// let products = [
//   {
//     id: 1,
//     name: 'Beige Coat',
//     price: 1980,
//     color: 'beige',
//     image: 'https://tyra-parring.github.io/host-/image/beigecoat1.jpg'
//   },
//   {
//     id: 2,
//     name: 'Black Coat',
//     price: 1990,
//     color: 'black',
//     image: 'https://tyra-parring.github.io/host-/image/blackcoat1.jpg'
//   },
//   {
//     id: 3,
//     name: 'Pink Faux Fur Coat',
//     price: 3600,
//     color: 'pink',
//     image: 'https://tyra-parring.github.io/host-/image/pnkfur1.jpg'
//   },
//   {
//     id: 4,
//     name: 'Brown Leather Faux Fur Coat',
//     price: 3600,
//     color: 'brown',
//     image: 'https://tyra-parring.github.io/host-/image/leatherfur1.jpg'
//   },
//   {
//     id: 5,
//     name: 'Beige Fur Coat',
//     price: 3200,
//     color: 'beige',
//     image: 'https://tyra-parring.github.io/host-/image/fur1.jpg'
//   },
//   {
//     id: 6,
//     name: 'Beige Teddy Fur Coat',
//     price: 2600,
//     color: 'beige',
//     image: 'https://tyra-parring.github.io/host-/image/beigefur1.jpg'
//   },
//   {
//     id: 7,
//     name: 'Tan Coat',
//     price: 1500,
//     color: 'tan',
//     image: 'https://tyra-parring.github.io/host-/image/browncoat1.jpg'
//   },
//   {
//     id: 8,
//     name: 'Off-White Jacket',
//     price: 1200,
//     color: 'off-white',
//     image: 'https://tyra-parring.github.io/host-/image/jacket1.jpg'
//   },
//   {
//     id: 9,
//     name: 'Black Fur Coat',
//     price: 3500,
//     color: 'black',
//     image: 'https://tyra-parring.github.io/host-/image/blackjac1.jpg'
//   },
//   {
//     id: 10,
//     name: 'White Coat',
//     price: 2500,
//     color: 'white',
//     image: 'https://tyra-parring.github.io/host-/image/whitecoat1.jpg'
//   },
//   {
//     id: 11,
//     name: 'Black Leather Jacket',
//     price: 3100,
//     color: 'black',
//     image: 'https://tyra-parring.github.io/host-/image/leatherjackket1.jpg'
//   },
//   {
//     id: 12,
//     name: 'Tan Coat',
//     price: 1500,
//     color: 'beige',
//     image: 'https://tyra-parring.github.io/host-/image/tancoat.jpg'
//   },
//   {
//     id: 13,
//     name: 'Black Coat',
//     price: 2200,
//     color: 'black',
//     image: 'https://tyra-parring.github.io/host-/image/men1.jpg'
//   },
//   {
//     id: 14,
//     name: 'Grey Striped Blazer Coat',
//     price: 2200,
//     color: 'grey',
//     image: 'https://tyra-parring.github.io/host-/image/stripedblazer.jpg'
//   },
//   {
//     id: 15,
//     name: 'Brown Blazer',
//     price: 2200,
//     color: 'brown',
//     image: 'https://tyra-parring.github.io/host-/image/brownblazer.jpg'
//   },
//   {
//     id: 16,
//     name: 'Beige Coat',
//     price: 2100,
//     color: 'beige',
//     image: 'https://tyra-parring.github.io/host-/image/blazer%20jacket1.jpg'
//   },
//   {
//     id: 17,
//     name: 'Black Jacket',
//     price: 1600,
//     color: 'black',
//     image: 'https://tyra-parring.github.io/host-/image/blckjacket1.jpg'
//   },
//   {
//     id: 18,
//     name: 'Beige Shacket',
//     price: 2200,
//     color: 'beige',
//     image: 'https://tyra-parring.github.io/host-/image/shacket1.jpg'
//   }
// ];

// function searchProducts(searchTerm) {
//   return products.filter(product => {
//     return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.color.toLowerCase().includes(searchTerm.toLowerCase());
//   });
// }

// searchBtn.addEventListener('click', searchProducts);

// searchInput.addEventListener('input', searchProducts);

// function searchProducts() {
//   const searchTerm = searchInput.value.toLowerCase();
//   const filteredProducts = products.filter(product => {
//     return product.name.toLowerCase().includes(searchTerm);
//   });

//   searchResults.innerHTML = '';
//   filteredProducts.forEach(product => {
//     const listItem = document.createElement('li');
//     listItem.textContent = product.name;
//     searchResults.appendChild(listItem);
//   });

//   if (filteredProducts.length > 0) {
//     searchResults.style.display = 'block';
//   } else {
//     searchResults.style.display = 'none';
//   }
// }

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
