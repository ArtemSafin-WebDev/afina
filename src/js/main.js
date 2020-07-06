import polyfills from './polyfills';
import detectTouch from './detectTouch';
import customSelects from './customSelects';
import phoneMask from './phoneMask';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelects();
    phoneMask();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
