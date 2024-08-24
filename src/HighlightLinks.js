class HighlightLinks {
    constructor() {
        this.button = document.getElementById('highlightLinksButton');
        this.links = document.querySelectorAll('a');
    }
    
    active() {
        this.button.dataset.active = 'true';
        this.button.classList.add('active');

        this.links.forEach(link => {
            link.style.backgroundColor = 'rgb(0, 0, 0)';
            link.style.color = 'rgb(255, 255, 0)';
            link.style.textDecoration = 'underline';
        });
    }

    inactive() {
        this.button.dataset.active = 'false';
        this.button.classList.remove('active');

        this.links.forEach(link => {
            link.style.backgroundColor = null;
            link.style.color = null;
            link.style.textDecoration = null;
        });
    }

    clickHandler() {
        this.button.addEventListener('click', () => {
            if (this.button.dataset.active === 'true') {
                this.inactive();
            } else {
                this.active();
            }
        });
    }
}

export { HighlightLinks };