const tabBtns = document.querySelectorAll('.tabs__button');

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
