const tabBtns = document.querySelectorAll('.tabs__button');
const selectBtn = document.querySelector('.select__placeholder');
const select = document.querySelector('.select');
const mapBlock = document.querySelector('.offices__map');
const tabs = document.querySelector('.tabs');
const cityBtn = document.querySelectorAll('.option__city');
const maps = document.querySelectorAll('.offices__map > img');
const mapPlug = document.querySelector('.offices__map_plug');
const subSelectBtn = document.querySelectorAll('.option__placeholder');
const subSelect = document.querySelectorAll('.option__list');

subSelectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const select = btn.nextElementSibling;

    btn.classList.toggle('active');
    if (select.style.maxHeight) {
      select.style.maxHeight = null;
      select.style.paddingTop = 0;
      select.style.paddingBottom = 0;
    } else {
      select.style.maxHeight = select.scrollHeight + 20 + 'px';
      select.style.paddingBottom = 10 + 'px';
      select.style.paddingTop = 10 + 'px';
    }
  });
});

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
  subSelect.forEach((subSelect) => {
    subSelect.style.maxHeight = null;
    subSelect.style.paddingTop = 0;
    subSelect.style.paddingBottom = 0;
  });

  subSelectBtn.forEach((btn) => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
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

  if (select.style.maxHeight) {
    select.style.maxHeight = null;
    select.style.paddingTop = 0;
    select.style.paddingBottom = 0;
  } else {
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
    select.style.maxHeight = null;
    selectBtn.classList.toggle('active');
    select.classList.toggle('active');
    mapBlock.classList.toggle('open');
    tabs.classList.toggle('open');
  });
});

function getSelectTopValue() {
  const viewPort = document.documentElement.clientWidth;
  const parentPaddingTop = getComputedStyle(select.parentNode).paddingTop.slice(
    0,
    -2
  );
  const hightMenu = getComputedStyle(
    select.previousElementSibling
  ).height.slice(0, -2);
  const hightTabsBlock = getComputedStyle(
    document.querySelector('.offices__tabs-wrapper')
  ).height.slice(0, -2);

  const gapInMenuBlock = getComputedStyle(
    document.querySelector('.offices__menu')
  ).rowGap.slice(0, -2);

  const gapTop = 20;
  if (viewPort > 425) {
    return Number(parentPaddingTop) + Number(hightMenu) + gapTop + 'px';
  }
  return (
    Number(parentPaddingTop) +
    Number(hightMenu) -
    hightTabsBlock -
    gapInMenuBlock +
    'px'
  );
}
select.style.top = getSelectTopValue();
