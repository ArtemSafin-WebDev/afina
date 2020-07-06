import polyfills from './polyfills';
import detectTouch from './detectTouch';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import toggleSidebar from './toggleSidebar';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelects();
    phoneMask();
    toggleSidebar();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
