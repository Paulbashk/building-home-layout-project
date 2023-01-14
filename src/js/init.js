import devModules from "./modules/development/index.js";
import { allModules } from "./modules/init.js";

window.onload = () => {
  const modules = allModules;
 
  /* Все DOM элементы */
  const _DOM = {
    selects: document.querySelectorAll('.sc-projects__select'),
    modal: {
      modals: document.querySelectorAll('[data-modal]'),
      buttons: document.querySelectorAll('[data-open-modal]'),
      modalSelects: document.querySelectorAll('.modal__select'),
    }
  };

  modules.swipers();
  if(document.querySelectorAll('.sc-projects__select')[0]) {
    modules.select(_DOM.selects);
  }

  if(document.querySelectorAll('.modal__select')[0]) {
    modules.select(_DOM.modal.modalSelects, true);
  }

  modules.tabs();
  modules.modal(_DOM.modal.modals, _DOM.modal.buttons);
}

devModules.isWebp();