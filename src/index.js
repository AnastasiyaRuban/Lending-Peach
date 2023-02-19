import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

const swiper = new Swiper('.corporate-life_swiper', {
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

const bullets = document.querySelectorAll('.swiper-pagination-bullet');
console.log(bullets.length);

bullets.forEach((bullet) => {
  const parentWidth = bullet.parentNode.getBoundingClientRect().width;
  bullet.style.width = `${
    (parentWidth - (bullets.length - 1) * 10) / bullets.length
  }px`;
});
