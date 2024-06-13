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

