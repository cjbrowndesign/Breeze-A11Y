import { HideImages } from './HideImages.js';
import { Saturation } from './Saturation.js';
import { FontSize } from './FontSize.js';
import { DisableAnimations } from './DisableAnimations.js';
import { HighlightLinks } from './HighlightLinks.js';
import { Cursor } from './Cursor.js';
import defaults from './defaults.js';

class BreezeA11y {
    constructor( options ) {
        this.options = {
            button: null,
            modal: null,
            close: null
        };

        this.config = { ...defaults, ...options};

        this.init();
    }

    init() {
        this.createModal();

        this.hideImages = new HideImages();
        this.saturation = new Saturation();
        this.fontSize = new FontSize();
        this.disableAnimations = new DisableAnimations();
        this.highlightLinks = new HighlightLinks();
        this.cursor = new Cursor();

        this.bindUIEvents();
    }

    createModal() {
        const modal = document.createElement('div');
        const button = document.createElement('button');
        const close = document.createElement('button');

        const {
            modalTitle,
            modalAccentColor,
            modalFontFamily,
            modalPosition
        } = this.config;

        modal.classList.add('br-a11y-modal');
        modal.classList.add(`br-a11y-modal--${modalPosition}`);
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'accessibilityModalLabel');
        modal.style.setProperty('--modal-accent-color', modalAccentColor);
        modal.style.setProperty('--modal-font-family', modalFontFamily);

        button.id = 'accessibilityButton';
        button.classList.add('br-a11y-button');
        button.classList.add(`br-a11y-button--${modalPosition}`);
        button.textContent = 'Accessibility Options';
        button.style.setProperty('--modal-accent-color', modalAccentColor);

        modal.innerHTML = `
        <div class="br-a11y-modal__inner">
            <div class="br-a11y-modal__header">
                <h2 id="accessibilityModalLabel" class="br-a11y-modal__title">${modalTitle}</h2>
                <button id="closeButton" class="br-a11y-modal__close">Close Modal</button>
            </div>
            <div class="br-a11y-modal__content">
                <div class="br-a11y-modal__grid">
                    ${this.createButton('fontSizeButton', 'Increase Font Size', 'size', 'default').outerHTML}
                    ${this.createButton('hideImagesButton', 'Hide Images', 'active', 'false').outerHTML}
                    ${this.createButton('saturationButton', 'Increase Saturation', 'saturation', 'default').outerHTML}
                    ${this.createButton('disableAnimationsButton', 'Disable Animations', 'active', 'false').outerHTML}
                    ${this.createButton('highlightLinksButton', 'Highlight Links', 'active', 'false').outerHTML}
                    ${this.createButton('cursorButton', 'Update Cursor', 'type', 'default').outerHTML}
                </div>
            </div>
        </div>
        `;

        document.body.appendChild(button);
        document.body.appendChild(modal);

        this.options.button = button;
        this.options.modal = modal;
        this.options.close = document.getElementById('closeButton');
    }

    createButton(id, text, dataType, dataValue) {
        const button = document.createElement('button');
        button.id = id;
        button.classList.add('br-a11y-modal__button');
        button.textContent = text;
        button.dataset[dataType] = dataValue;

        return button;
    }

    openModal() {
        this.options.modal.classList.add('is-open');
    }

    closeModal() {
        this.options.modal.classList.remove('is-open');
    }

    toggleModal() {
        if (this.options.modal.classList.contains('is-open')) {
            this.closeModal();
        } else {
            this.openModal();
        }
    }

    bindUIEvents() {
        this.options.button.addEventListener('click', () => {
            this.toggleModal();
        });

        this.options.close.addEventListener('click', () => {
            this.closeModal();
        });

        document.addEventListener('click', (event) => {
            if (this.options.modal.classList.contains('is-open')) {
                if (!this.options.modal.contains(event.target) && !this.options.button.contains(event.target)) {
                    this.closeModal();
                }
            }
        });

        this.hideImages.clickHandler();
        this.saturation.clickHandler();
        this.fontSize.clickHandler();
        this.disableAnimations.clickHandler();
        this.highlightLinks.clickHandler();
        this.cursor.clickHandler();
    }
}

export { BreezeA11y };

window.BreezeA11y = ( options ) => {
    return new BreezeA11y( options );
}