import polyfills from './polyfills';
import detectTouch from './detectTouch';
import customSelects from './customSelects';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelects();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
