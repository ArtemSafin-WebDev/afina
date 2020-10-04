import Choices from 'choices.js';

function initializeCustomSelects() {
    const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

    customSelects.forEach(select => {
        new Choices(select, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: select.hasAttribute("data-position-top") ? 'top' : 'bottom',
            searchEnabled: select.hasAttribute("data-has-search") ? true : false,
            noResultsText: 'Ничего не найдено'
        });
    });
}


window.initCustomSelects = initializeCustomSelects;

export default initializeCustomSelects;