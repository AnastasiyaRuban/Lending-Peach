import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bullets = document.querySelectorAll('.swiper-pagination-bullet');

const swiper = new Swiper('.corporate-life__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

bullets.forEach((bullet) => {
  const parentWidth = bullet.parentNode.getBoundingClientRect().width;
  const bulletWidth = `${
    (parentWidth - (bullets.length - 1) * 10) / bullets.length
  }px`;
  bullet.style.width = bulletWidth;
});
