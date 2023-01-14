import Choices from "choices.js";

/* DOCS: https://github.com/Choices-js/Choices */
/* TUTORIAL: https://www.youtube.com/watch?v=dnC7XCYb9Qg */

/*
  Инициализация кастомных select
*/
const selects = (selects, placeholder = false) => {
  const choises = [];

  const config = {
    searchEnabled: false,
    searchChoices: false,
    placeholder: placeholder,  // Наличие placeholder
    loadingText: 'Загрузка...',
    noResultsText: 'Нет результатов',
    noChoicesText: 'Нет результатов',
    itemSelectText: '',
  };

  selects.forEach(select => choises.push(new Choices(select, config)));

  return choises;
}

export default selects;