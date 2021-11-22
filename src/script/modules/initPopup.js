export default function initPopup() {
  const openPopup = document.querySelector('.js-popup-open');
  const closePopup = document.querySelector('.js-popup-close');
  const body = document.querySelector('.js-body');

  openPopup.addEventListener('click', function () {
    body.classList.add('body--open-popup');  
  });
  
  closePopup.addEventListener('click', function () {
    body.classList.remove('body--open-popup');  
  });
}