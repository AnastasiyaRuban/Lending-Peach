import './offices';
import './swiper';
import Scrollbar from 'smooth-scrollbar';
import './styles/main.scss';

const viewPort = document.documentElement.clientWidth;
const directionBlock = document.querySelectorAll('.direction');
const accordion = document.querySelectorAll('.direction__title-wrapper');
const accordionContents = document.querySelectorAll('.direction__description');
let contentMaxHeight = 0;
let contentHeights = [];

if (viewPort <= 1024) {
  Scrollbar.initAll();
}

window.addEventListener('resize', function () {
  document.location.reload();
});

accordionContents.forEach((content) => {
  contentHeights.push(content.scrollHeight);
});

if (viewPort <= 600) {
  contentMaxHeight = Math.max.apply(null, contentHeights);
  console.log(contentMaxHeight);

  accordion.forEach((item) => {
    item.addEventListener('click', function (e) {
      const description = item.nextElementSibling;
      const parentItem = item.parentElement;
      //   item.classList.toggle('active');
      parentItem.classList.toggle('active');
      //   const description = item.querySelector('.description');
      if (description.style.maxHeight) {
        description.style.maxHeight = null;
        description.style.paddingTop = 0;
        description.style.paddingBottom = 0;
      } else {
        console.log(description.scrollHeight);
        description.style.height = contentMaxHeight + 20 + 'px';
        description.style.maxHeight = contentMaxHeight + 20 + 'px';
        description.style.paddingBottom = 10 + 'px';
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
