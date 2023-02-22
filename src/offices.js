const tabBtns = document.querySelectorAll('.tabs__button');
const selectBtn = document.querySelector('.select__placeholder');
const select = document.querySelector('.select');
const mapBlock = document.querySelector('.offices__map');
const tabs = document.querySelector('.tabs');
const cityBtn = document.querySelectorAll('.option__city');
const maps = document.querySelectorAll('.offices__map > img');
const mapPlug = document.querySelector('.offices__map_plug');

function getSelectTopValue() {
  const parentPaddingTop = getComputedStyle(select.parentNode).paddingTop.slice(
    0,
    -2
  );
  const hightMenu = getComputedStyle(
    select.previousElementSibling
  ).height.slice(0, -2);
  const gapTop = 20;
  return Number(parentPaddingTop) + Number(hightMenu) + gapTop + 'px';
}

select.style.top = getSelectTopValue();

tabBtns.forEach((element) => {
  const tabName = element.getAttribute('data-tab-name');

  element.addEventListener('click', (e) => {
    tabBtns.forEach((btn) => {
      btn.classList.remove('tabs__button_active');
    });
    element.classList.add('tabs__button_active');
    mapPlug.style.display = 'none';
    maps.forEach((map) => {
      if (map.getAttribute('data-path') === tabName) {
        map.classList.add('offices__map-active');
      } else map.classList.remove('offices__map-active');
    });
  });
});

selectBtn.addEventListener('click', () => {
  tabBtns.forEach((btn) => {
    if (!btn.getAttribute('disabled')) {
      btn.setAttribute('disabled', true);
    } else btn.removeAttribute('disabled');
  });

  selectBtn.classList.toggle('active');
  select.classList.toggle('active');
  mapBlock.classList.toggle('open');
  tabs.classList.toggle('open');

  if (select.style.maxHeight) {
    select.style.maxHeight = null;
    select.style.paddingTop = 0;
    select.style.paddingBottom = 0;
  } else {
    select.style.height = select.scrollHeight + 20 + 'px';
    select.style.maxHeight = select.scrollHeight + 20 + 'px';
    select.style.paddingBottom = 10 + 'px';
    select.style.paddingTop = 10 + 'px';
  }
});

cityBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    maps.forEach((map) => {
      map.classList.remove('offices__map-active');
      mapPlug.style.display = 'block';
    });
    tabBtns.forEach((btn) => {
      if (!btn.getAttribute('disabled')) {
        btn.setAttribute('disabled', true);
      } else btn.removeAttribute('disabled');
    });

    selectBtn.classList.toggle('active');
    select.classList.toggle('active');
    mapBlock.classList.toggle('open');
    tabs.classList.toggle('open');
  });
});
