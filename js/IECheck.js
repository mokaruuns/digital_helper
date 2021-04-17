if (window) {
    const isEI =  window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    if (isEI) {
        const wrapper = document.createElement('div');
        const dialog = document.createElement('div');
        const closeButton = document.createElement('div');
        const title = document.createElement('div');
        const text = document.createElement('div');

        wrapper.className = 'ie-wrapper';
        dialog.className = 'ie-dialog';
        closeButton.className = 'ie-close-button';
        title.className = 'ie-title';
        text.className = 'ie-text';

        title.innerHTML = 'К сожалению, сайт не поддерживается в вашем браузере';
        text.innerHTML = 'Рекомендуем использовать последние версии Google Chrome, Safari, Mozilla Firefox, Opera или Microsoft Edge';
        closeButton.onclick = function() {
            document.body.removeChild(wrapper);
        };

        dialog.appendChild(closeButton);
        dialog.appendChild(title);
        dialog.appendChild(text);
        wrapper.appendChild(dialog);
        document.body.appendChild(wrapper);
    }
}
