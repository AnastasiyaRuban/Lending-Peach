const tabBtns = document.querySelectorAll('.tabs__button');
const selectBtn = document.querySelector('.select__placeholder');
const list = document.querySelector('.select__options');
const map = document.querySelector('.offices__map');
const tabs = document.querySelector('.tabs');

tabBtns.forEach((element) => {
  const tabName = element.getAttribute('data-tab-name');
  const maps = document.querySelectorAll('.offices__map > img');

  element.addEventListener('click', (e) => {
    tabBtns.forEach((btn) => {
      btn.classList.remove('tabs__button_active');
    });
    element.classList.add('tabs__button_active');

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
  list.classList.toggle('active');
  map.classList.toggle('open');
  tabs.classList.toggle('open');
});
