import initActiveMenu from "./modules/initActiveMenu";
import initSlider from "./modules/initSlider";
import initActiveList from "./modules/initActiveList";
import initPopup from "./modules/initPopup";

document.addEventListener('DOMContentLoaded', () => {
  initActiveMenu();
  initSlider();
  initActiveList(); 
  initPopup();
})