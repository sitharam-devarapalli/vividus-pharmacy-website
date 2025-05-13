//   slider plue header js start 
window.addEventListener('scroll', function () {
  var header = document.querySelector('.vividus-header-main');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

$(document).ready(function () {
  // Close dropdown when clicking anywhere outside
  $(document).on('click', function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $navbar.collapse('hide');
    }
  });

  // Close dropdown when scrolling
  $(window).on('scroll', function () {
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-toggle').attr('aria-expanded', 'false');
  });

  // Close dropdown when selecting a dropdown item
  $('.dropdown-item').on('click', function () {
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-toggle').attr('aria-expanded', 'false');
  });
});


$('a.nav-link, a.dropdown-item').on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 70
    }, 800);
  }
});

//   slider plue header js end 

// number count section js start 
document.querySelectorAll('.vividus-homecount-number').forEach(el => {
  const target = +el.textContent.replace(/\D/g, '');
  let count = 0;
  const step = target / 100;

  const counter = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = el.textContent.includes('K') ? '2K' : target + (el.textContent.includes('+') ? '+' : '');
      clearInterval(counter);
    } else {
      el.textContent = Math.floor(count) + (el.textContent.includes('+') ? '+' : '');
    }
  }, 10);
});

// number count section js end 

// faqs section js start 
$('.vividus-faqs-header').on('click', function () {
  var $icon = $(this).find('.faq-icon i');

  // Collapse all icons to plus
  $('.vividus-faqs-header').removeClass('active');
  $('.vividus-faqs-header .faq-icon i').removeClass('fa-minus').addClass('fa-plus');

  // If the target is not already open, change to minus
  if (!$(this).next().hasClass('show')) {
    $(this).addClass('active');
    $icon.removeClass('fa-plus').addClass('fa-minus');
  }
});
// faqs section js end 


// our achievements in about us page 
const carousel = document.querySelector('#achievementsCarousel');
const carouselInstance = new bootstrap.Carousel(carousel);

document.getElementById('prevSlideBtn').addEventListener('click', () => {
  carouselInstance.prev();
});

document.getElementById('nextSlideBtn').addEventListener('click', () => {
  carouselInstance.next();
});


// scrolling page smooth js 
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax').forEach(el => {
    let speed = el.getAttribute('data-speed');
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

