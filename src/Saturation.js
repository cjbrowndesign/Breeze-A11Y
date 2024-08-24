class Saturation {
    constructor() {
        this.button = document.getElementById('saturationButton');
    }

    default() {
        this.button.dataset.saturation = 'default';
        this.button.textContent = 'Change Saturation';
        document.documentElement.style.filter = null;
    }

    low() {
        this.button.dataset.saturation = 'low';
        this.button.textContent = 'Low Saturation';
        document.documentElement.style.filter = 'saturate(0.5)';
    }

    high() {
        this.button.dataset.saturation = 'high';
        this.button.textContent = 'High Saturation';
        document.documentElement.style.filter = 'saturate(3)';
    }

    desaturate() {
        this.button.dataset.saturation = 'desaturate';
        this.button.textContent = 'Desaturate';
        document.documentElement.style.filter = 'saturate(0)';
    }

    clickHandler() {
        this.button.addEventListener('click', (btn) => {
            switch (this.button.dataset.saturation) {
                case 'default':
                    this.low();
                    btn.target.classList.add('active');
                    break;
                case 'low':
                    this.high();
                    break;
                case 'high':
                    this.desaturate();
                    break;
                case 'desaturate':
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

export { Saturation };