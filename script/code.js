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


//carousel
document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselInner.children.length;
        const offset = -currentIndex * carouselInner.clientWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }, 3000); 
});
