import './offices';
import './swiper';
import './directions';
import Scrollbar from 'smooth-scrollbar';
import './styles/main.scss';
const viewPort = document.documentElement.clientWidth;
// window.addEventListener('resize', function () {
//   document.location.reload();
// });

if (viewPort <= 1024) {
  Scrollbar.initAll();
}
