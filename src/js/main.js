import polyfills from './polyfills';
import detectTouch from './detectTouch';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import toggleSidebar from './toggleSidebar';
import 'air-datepicker/dist/js/datepicker';
import numericInputs from './numericInput';
import fileUpload from './fileUpload';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelects();
    phoneMask();
    toggleSidebar();
    numericInputs();
    fileUpload();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
