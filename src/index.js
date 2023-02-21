import './offices';
import './swiper';
import './styles/main.scss';

const viewPort = document.documentElement.clientWidth;
const directionBlock = document.querySelectorAll('.direction');
const accordion = document.querySelectorAll('.direction__title-wrapper');

if (viewPort <= 768) {
  accordion.forEach((item) => {
    item.addEventListener('click', function () {
      item.classList.toggle('active');
      const description = item.nextElementSibling;
      if (description.style.maxHeight) {
        description.style.maxHeight = null;
      } else {
        description.style.maxHeight = description.scrollHeight + 'px';
        description.style.paddingTop = 10 + 'px';
      }
    });
  });
} else {
  directionBlock.forEach((block) => {
    block.addEventListener('mouseover', () => {
      block.classList.add('open');
    });
    block.addEventListener('mouseout', () => {
      block.classList.remove('open');
    });
  });
}
