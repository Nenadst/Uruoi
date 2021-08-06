$(function(){
$('.staples__slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '.staples__arrow-next',
  prevArrow: '.staples__arrow-prev',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

///////////////////ABOUT SHOW IMAGE /////////////////////////////
const tabs = document.querySelectorAll('.about__title');
const tabsContainer = document.querySelector('.about__title-box');
const tabsContent = document.querySelectorAll('.about__img-box');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.about__title');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('about__active'));
  tabsContent.forEach(c => c.classList.remove('about__active-content'));

  // Activate tab
  clicked.classList.add('about__active');

  // Activate content area
  document
    .querySelector(`.about__img-box--${clicked.dataset.tab}`)
    .classList.add('about__active-content');
});