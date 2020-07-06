export default function() {
    const numericInputs = Array.from(document.querySelectorAll('.js-numeric-input'));

    function cleanInput(value) {
        return parseInt(value.toString().replace(/\s/g, ''), 10);
    }
    numericInputs.forEach(element => {
        element.addEventListener('input', event => {
            const cleanedValue = cleanInput(event.target.value);
            element.value = !isNaN(cleanedValue) ? cleanedValue : '';
        });
        element.addEventListener('change', event => {
            const cleanedValue = cleanInput(event.target.value);
            element.value = !isNaN(cleanedValue) ? cleanedValue : '';
        });
    });
}
