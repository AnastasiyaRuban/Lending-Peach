const viewPort = document.documentElement.clientWidth;
const directionBlock = document.querySelectorAll('.direction');
const accordionTitle = document.querySelectorAll('.direction__title-wrapper');
const accordionContents = document.querySelectorAll('.direction__description');
let contentMaxHeight = 0;
let contentHeights = [];

accordionContents.forEach((content) => {
  contentHeights.push(content.scrollHeight);
});

function showContent(item) {
  const description = item.currentTarget.nextElementSibling;
  const parentItem = item.currentTarget.parentElement;
  parentItem.classList.toggle('active');
  if (description.style.maxHeight) {
    description.style.maxHeight = null;
    description.style.paddingTop = 0;
    description.style.paddingBottom = 0;
  } else {
    description.style.height = contentMaxHeight + 20 + 'px';
    description.style.maxHeight = contentMaxHeight + 20 + 'px';
    description.style.paddingBottom = 10 + 'px';
    description.style.paddingTop = 10 + 'px';
  }
}

if (viewPort <= 600) {
  contentMaxHeight = Math.max.apply(null, contentHeights);
  accordionTitle.forEach((item) => {
    item.addEventListener('click', showContent);
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
