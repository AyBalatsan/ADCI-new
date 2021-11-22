export default function initActiveList() {
  const shellList = document.querySelector('.js-shell-list');
  const toggle = document.querySelector('.js-toggle-list');

  toggle.addEventListener('click', function () {
    if(shellList.classList.contains('preview__bottom-list--active')){
      shellList.classList.remove('preview__bottom-list--active');
    } else {
      shellList.classList.add('preview__bottom-list--active');
    }
  });  
}