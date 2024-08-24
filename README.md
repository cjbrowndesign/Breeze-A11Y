# Breeze A11y

Accessibility widget for personal projects. The widget offers various features, such as:

- Increasing font size
- Reducing saturation
- Disabling animations
- Hiding images
- Highlighting links
- Reading mask/guide.

## Usage

### Module

Import as an NPM module:

```javascript
import { BreezeA11y } from 'breeze-a11y';
import 'breeze-a11y/dist/styles.css';

const modal = new BreezeA11y();
```

### HTML

```html
<script src="./vendor/js/breeze-a11y.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const modal = BreezeA11y();
    });
</script>
```

## Parameters

The Breeze A11Y widget accepts the following params:

<table>
	<tr>
		<th>Property</th>
		<th>Default</th>
	</tr>
	<tr>
		<td>modalTitle</td>
		<td>'Breeze A11Y Modal'</td>
	</tr>
    <tr>
		<td>modalAccentColor</td>
		<td>'#38A87F'</td>
	</tr>
    <tr>
		<td>modalFontFamily</td>
		<td>'Helvetica, Arial, sans-serif'</td>
	</tr>
    <tr>
		<td>modalPosition</td>
		<td>'bottom-right'</td>
	</tr>
</table>

`modalPosition` accepts the following params: `bottom-left`, `bottom-right`, `top-left`, `top-right`

## Custom Styles

If you'd prefer to style the Breeze A11Y manually, you can either update the custom CSS properties or exclude the imported CSS file and create your own.

#### Custom Properties

```css
--modal-accent-color: #38A87F;
--modal-font-family: Helvetica, Arial, sans-serif;
```

#### Markup

The Breeze A11Y widget markup:

```html
<button class="br-a11y-button br-a11y-button--${modalPosition}"></button>

<div class="br-a11y-modal br-a11y-modal--${modalPosition} is-open">
    <div class="br-a11y-modal__inner">
        <div class="br-a11y-modal__header">
            <h2 class="br-a11y-modal__title"></h2>
            <button class="br-a11y-modal__close"></button>
        </div>
        <div class="br-a11y-modal__content">
            <div class="br-a11y-modal__grid">
                <button class="br-a11y-modal__button"></button>
            </div>
        </div>
    </div>
</div>
```
