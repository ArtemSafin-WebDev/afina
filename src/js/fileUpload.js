export default function() {
    const fileElements = Array.from(document.querySelectorAll('.js-file-upload'));

    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number > 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number > 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }

    const fileCardTemplate = (name, size) => `
        <svg width="20" height="20" aria-hidden="true" class="icon-documents">
            <use xlink:href="#documents" />
        </svg>
        ${name} ${size}
        <svg width="20" height="20" aria-hidden="true" class="icon-close">
            <use xlink:href="#close" />
        </svg>
    `;
    

    fileElements.forEach(element => {
        const fileLabels = Array.from(element.querySelectorAll('.create-event__file-label'));
        const filesList = element.querySelector('.create-event__files');

    
        fileLabels.forEach((label, labelIndex) => {
            const input = label.querySelector('input[type="file"]');
           
            input.addEventListener('change', () => {
                const filename = input.files.length && input.files[0].name;
                const filesize = input.files.length && input.files[0].size;

                const fileElement = document.createElement('div');
                fileElement.className = 'create-event__file';
                fileElement.innerHTML = fileCardTemplate(filename, returnFileSize(filesize));

                const removeHandler = () => {
                    label.classList.remove('hidden');
                    input.value = null;
                    fileElement.removeEventListener('click', removeHandler);
                    fileElement.remove();
                }


                fileElement.addEventListener('click', removeHandler)

                filesList.appendChild(fileElement);

                label.classList.add('hidden');
            })
        });

    });
}
