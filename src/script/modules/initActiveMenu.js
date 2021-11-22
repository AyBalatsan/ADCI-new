export default function initActiveMenu() {
  const wrapperManager = document.querySelector('.js-wrapper-manager');
  const burger = document.querySelector('.js-open-menu');
  const close = document.querySelector('.js-close-menu');

  burger.addEventListener('click', function () {
    wrapperManager.classList.add('page-header__wrapper--open-menu');  
  });
  close.addEventListener('click', function () {
    wrapperManager.classList.remove('page-header__wrapper--open-menu');  
  });
  
}