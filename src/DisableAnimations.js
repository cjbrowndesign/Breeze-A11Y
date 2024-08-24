class DisableAnimations {
    constructor() {
        this.button = document.getElementById('disableAnimationsButton');
    }

    disable() {
        document.body.classList.add('no-animations');
        this.button.dataset.active = 'true';
        this.button.classList.add('active');
    }

    enable() {
        document.body.classList.remove('no-animations');
        this.button.dataset.active = 'false';
        this.button.classList.remove('active');
    }

    clickHandler() {
        this.button.addEventListener('click', () => {
            if (this.button.dataset.active === 'true') {
                this.enable();
            } else {
                this.disable();
            }
        });
    }
}

export { DisableAnimations };