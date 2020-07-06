import Choices from 'choices.js';

function initializeCustomSelects() {
    const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

    customSelects.forEach(select => {
        new Choices(select, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false
        });
    });
}


window.initCustomSelects = initializeCustomSelects;

export default initializeCustomSelects;