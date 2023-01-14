import modal from "./modal/modal.js";
import tabs from "./tabs/tabs.js";
import swipers from "./swiper/swiper.js";
import select from "./select/select.js";

// Все модули, которые необходимо экспортировать
export const allModules = {
  modal,
  swipers,
  tabs,
  select,
};

// Все модули, которые необходимо запустить при загрузке страницы
export const initModules = () => {
  return {
    init: true
  };
};