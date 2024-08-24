class HideImages {
    constructor() {
        this.images = document.querySelectorAll('img');
        this.button = document.getElementById('hideImagesButton');
    }
    
    hide() {
        this.button.dataset.active = 'true';
        this.button.classList.add('active');

        this.images.forEach(image => {
            image.style.visibility = 'hidden';
        });
    }

    show() {
        this.button.dataset.active = 'false';
        this.button.classList.remove('active');

        this.images.forEach(image => {
            image.style.visibility = 'visible';
        });
    }

    clickHandler() {
        this.button.addEventListener('click', () => {
            if (this.button.dataset.active === 'true') {
                this.show();
            } else {
                this.hide();
            }
        });
    }
}

export { HideImages };