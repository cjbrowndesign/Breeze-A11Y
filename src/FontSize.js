class FontSize {
    constructor() {
        this.button = document.getElementById('fontSizeButton');
        this.elements = this.getElements();
    }

    getElements() {
        const parent = document.body;
        const items = 'h1, h2, h3, h4, h5, h6, p, a, span, li, td, th, label, button, input, textarea';
        const exceptions = '.br-a11y-modal, .br-a11y-button, .br-a11y-modal__button, .br-a11y-modal__close, .br-a11y-modal__title, .br-a11y-modal__grid';
        const filteredElements = Array.from(parent.querySelectorAll(items)).filter(element => !element.matches(exceptions));

        return filteredElements;
    }

    default() {
        this.button.dataset.size = 'default';
        this.button.textContent = 'Change Font Size';
        this.elements.forEach(element => {
            element.style.zoom = null;
        });
    }

    small() {
        this.button.dataset.size = 'small';
        this.button.textContent = 'Size +1';
        this.elements.forEach(element => {
            element.style.zoom = '1.2';
        });
    }

    medium() {
        this.button.dataset.size = 'medium';
        this.button.textContent = 'Size +2';
        this.elements.forEach(element => {
            element.style.zoom = '1.4';
        });
    }

    large() {
        this.button.dataset.size = 'large';
        this.button.textContent = 'Size +3';
        this.elements.forEach(element => {
            element.style.zoom = '1.6';
        });
    }

    clickHandler() {
        this.button.addEventListener('click', (btn) => {
            switch (this.button.dataset.size) {
                case 'default':
                    this.small();
                    btn.target.classList.add('active');
                    break;
                case 'small':
                    this.medium();
                    break;
                case 'medium':
                    this.large();
                    break;
                case 'large':
                    this.default();
                    btn.target.classList.remove('active');
                    break;
                default:
                    this.default();
                    break;
            }
        });
    }
}

export { FontSize };