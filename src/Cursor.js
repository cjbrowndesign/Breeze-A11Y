class Cursor {
    constructor() {
        this.button = document.getElementById('cursorButton');
    }

    default() {
        document.body.style.cursor = null;
        this.button.dataset.type = 'default';
        this.button.textContent = 'Update Cursor';
    }

    largeCursor() {
        document.documentElement.classList.add('br-a11y-large-cursor');
        this.button.dataset.type = 'large';
        this.button.textContent = 'Large Cursor';
    }

    readingMask() {
        const maskTop = document.createElement('div');
        const maskBottom = document.createElement('div');
        const maskTopInner = document.createElement('div');
        const maskBottomInner = document.createElement('div');

        maskTop.classList.add('br-a11y-mask-top');
        maskBottom.classList.add('br-a11y-mask-bottom');
        maskTopInner.classList.add('br-a11y-mask-top__inner');
        maskBottomInner.classList.add('br-a11y-mask-bottom__inner');

        document.body.appendChild(maskTop);
        document.body.appendChild(maskBottom);
        maskTop.appendChild(maskTopInner);
        maskBottom.appendChild(maskBottomInner);

        this.button.dataset.type = 'reading-mask';
        this.button.textContent = 'Reading Mask';
    }

    readingGuide() {
        const guide = document.createElement('div');
        guide.classList.add('br-a11y-reading-guide');
        document.body.appendChild(guide);

        this.button.dataset.type = 'reading-guide';
        this.button.textContent = 'Reading Guide';
    }

    removeLargeCursor() {
        document.documentElement.classList.remove('br-a11y-large-cursor');
    }

    removeReadingMask() {
        const maskTop = document.querySelector('.br-a11y-mask-top');
        const maskBottom = document.querySelector('.br-a11y-mask-bottom');

        maskTop.remove();
        maskBottom.remove();
    }

    removeReadingGuide() {
        const guide = document.querySelector('.br-a11y-reading-guide');

        guide.remove();
    }

    trackReadingMask() {
        const maskTop = document.querySelector('.br-a11y-mask-top');
        const maskBottom = document.querySelector('.br-a11y-mask-bottom');
    
        document.addEventListener('mousemove', (event) => {
            const gapHeight = 100;
            const topHeight = event.clientY - (gapHeight / 2);
            const bottomHeight = window.innerHeight - event.clientY - (gapHeight / 2);
    
            maskTop.style.setProperty('--maskHeightTop', `${topHeight}px`);
            maskBottom.style.setProperty('--maskHeightBottom', `${bottomHeight}px`);
        });
    }

    trackReadingGuide() {
        const guide = document.querySelector('.br-a11y-reading-guide');

        document.addEventListener('mousemove', (event) => {
            const guideWidth = guide.offsetWidth;
            const guideHeight = guide.offsetHeight;
    
            const topPosition = event.clientY - (guideHeight / 2);
            const leftPosition = event.clientX - (guideWidth / 2);
    
            guide.style.top = `${topPosition}px`;
            guide.style.left = `${leftPosition}px`;
        });
    }

    clickHandler() {
        this.button.addEventListener('click', (btn) => {
            switch (this.button.dataset.type) {
                case 'default':
                    this.largeCursor();
                    btn.target.classList.add('active');
                    break;
                case 'large':
                    this.readingMask();
                    this.trackReadingMask();
                    this.removeLargeCursor();
                    break;
                case 'reading-mask':
                    this.readingGuide();
                    this.trackReadingGuide();
                    this.removeReadingMask();
                    break;
                case 'reading-guide':
                    this.default();
                    this.removeReadingGuide();
                    btn.target.classList.remove('active');
                    break;
                default:
                    this.default();
                    break;
            }
        });
    }
}

export { Cursor };