
    import { css } from "lit";
    export const TWStyles = css` /*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

:root,
[data-theme] {
  background-color: var(--fallback-b1,oklch(var(--b1)/1));
  color: var(--fallback-bc,oklch(var(--bc)/1));
}

@supports not (color: oklch(0 0 0)) {
  :root {
    color-scheme: light;
    --fallback-p: #491eff;
    --fallback-pc: #d4dbff;
    --fallback-s: #ff41c7;
    --fallback-sc: #fff9fc;
    --fallback-a: #00cfbd;
    --fallback-ac: #00100d;
    --fallback-n: #2b3440;
    --fallback-nc: #d7dde4;
    --fallback-b1: #ffffff;
    --fallback-b2: #e5e6e6;
    --fallback-b3: #e5e6e6;
    --fallback-bc: #1f2937;
    --fallback-in: #00b3f0;
    --fallback-inc: #000000;
    --fallback-su: #00ca92;
    --fallback-suc: #000000;
    --fallback-wa: #ffc22d;
    --fallback-wac: #000000;
    --fallback-er: #ff6f70;
    --fallback-erc: #000000;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      --fallback-p: #7582ff;
      --fallback-pc: #050617;
      --fallback-s: #ff71cf;
      --fallback-sc: #190211;
      --fallback-a: #00c7b5;
      --fallback-ac: #000e0c;
      --fallback-n: #2a323c;
      --fallback-nc: #a6adbb;
      --fallback-b1: #1d232a;
      --fallback-b2: #191e24;
      --fallback-b3: #15191e;
      --fallback-bc: #a6adbb;
      --fallback-in: #00b3f0;
      --fallback-inc: #000000;
      --fallback-su: #00ca92;
      --fallback-suc: #000000;
      --fallback-wa: #ffc22d;
      --fallback-wac: #000000;
      --fallback-er: #ff6f70;
      --fallback-erc: #000000;
    }
  }
}

html {
  -webkit-tap-highlight-color: transparent;
}

:root {
  color-scheme: dark;
  --in: 0.7206 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 0.8471 0.199 83.87;
  --er: 0.7176 0.221 22.18;
  --pc: 0.13138 0.0392 275.75;
  --sc: 0.1496 0.052 342.55;
  --ac: 0.14902 0.0334 183.61;
  --inc: 0 0 0;
  --suc: 0 0 0;
  --wac: 0 0 0;
  --erc: 0 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 0.6569 0.196 275.75;
  --s: 0.748 0.26 342.55;
  --a: 0.7451 0.167 183.61;
  --n: 0.313815 0.021108 254.139175;
  --nc: 0.746477 0.0216 264.435964;
  --b1: 0.253267 0.015896 252.417568;
  --b2: 0.232607 0.013807 253.100675;
  --b3: 0.211484 0.01165 254.087939;
  --bc: 0.746477 0.0216 264.435964;
}

[data-theme=dark] {
  color-scheme: dark;
  --in: 0.7206 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 0.8471 0.199 83.87;
  --er: 0.7176 0.221 22.18;
  --pc: 0.13138 0.0392 275.75;
  --sc: 0.1496 0.052 342.55;
  --ac: 0.14902 0.0334 183.61;
  --inc: 0 0 0;
  --suc: 0 0 0;
  --wac: 0 0 0;
  --erc: 0 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 0.6569 0.196 275.75;
  --s: 0.748 0.26 342.55;
  --a: 0.7451 0.167 183.61;
  --n: 0.313815 0.021108 254.139175;
  --nc: 0.746477 0.0216 264.435964;
  --b1: 0.253267 0.015896 252.417568;
  --b2: 0.232607 0.013807 253.100675;
  --b3: 0.211484 0.01165 254.087939;
  --bc: 0.746477 0.0216 264.435964;
}

[data-theme=light] {
  color-scheme: light;
  --in: 0.7206 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 0.8471 0.199 83.87;
  --er: 0.7176 0.221 22.18;
  --pc: 0.89824 0.06192 275.75;
  --ac: 0.15352 0.0368 183.61;
  --inc: 0 0 0;
  --suc: 0 0 0;
  --wac: 0 0 0;
  --erc: 0 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 0.4912 0.3096 275.75;
  --s: 0.6971 0.329 342.55;
  --sc: 0.9871 0.0106 342.55;
  --a: 0.7676 0.184 183.61;
  --n: 0.321785 0.02476 255.701624;
  --nc: 0.894994 0.011585 252.096176;
  --b1: 1 0 0;
  --b2: 0.961151 0 0;
  --b3: 0.924169 0.00108 197.137559;
  --bc: 0.278078 0.029596 256.847952;
}

[data-theme=halloween] {
  color-scheme: dark;
  --b2: 0.230416 0 0;
  --b3: 0.213072 0 0;
  --bc: 0.849552 0 0;
  --sc: 0.89196 0.0496 305.03;
  --nc: 0.848742 0.009322 65.681484;
  --inc: 0.90923 0.043042 262.880917;
  --suc: 0.12541 0.033982 149.213788;
  --wac: 0.133168 0.031484 58.31834;
  --erc: 0.13144 0.0398 27.33;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 0.7748 0.204 60.62;
  --pc: 0.196935 0.004671 196.779412;
  --s: 0.4598 0.248 305.03;
  --a: 0.648 0.223 136.073479;
  --ac: 0 0 0;
  --n: 0.24371 0.046608 65.681484;
  --b1: 0.247759 0 0;
  --in: 0.54615 0.215208 262.880917;
  --su: 0.627052 0.169912 149.213788;
  --wa: 0.66584 0.157422 58.31834;
  --er: 0.6572 0.199 27.33;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

@media (hover: hover) {
  .btn.glass:hover {
    --glass-opacity: 25%;
    --glass-border-opacity: 15%;
  }
}

.footer {
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  place-items: start;
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  row-gap: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.footer > * {
  display: grid;
  place-items: start;
  gap: 0.5rem;
}

@media (min-width: 48rem) {
  .footer {
    grid-auto-flow: column;
  }

  .footer-center {
    grid-auto-flow: row dense;
  }
}

.link {
  cursor: pointer;
  text-decoration-line: underline;
}

.btn.glass {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: currentColor;
}

.btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}

@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.98));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }

  50% {
    background-position-y: -2px;
  }

  100% {
    background-position-y: 0;
  }
}

.link:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

@keyframes modal-pop {
  0% {
    opacity: 0;
  }
}

@keyframes progress-loading {
  50% {
    background-position-x: -115%;
  }
}

@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }

  50% {
    box-shadow: 0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }

  100% {
    box-shadow: 0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }
}

@keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }

  40% {
    transform: translateY(-0.125em);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes skeleton {
  from {
    background-position: 150%;
  }

  to {
    background-position: -50%;
  }
}

@keyframes toast-pop {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.glass,
  .glass.btn-active {
  border: none;
  -webkit-backdrop-filter: blur(var(--glass-blur, 40px));
          backdrop-filter: blur(var(--glass-blur, 40px));
  background-color: transparent;
  background-image: linear-gradient(
        135deg,
        rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
        rgb(0 0 0 / 0%) 100%
      ),
      linear-gradient(
        var(--glass-reflex-degree, 100deg),
        rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
        rgb(0 0 0 / 0%) 25%
      );
  box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset,
      0 0 0 2px rgb(0 0 0 / 5%);
  text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
}

@media (hover: hover) {
  .glass.btn-active {
    border: none;
    -webkit-backdrop-filter: blur(var(--glass-blur, 40px));
            backdrop-filter: blur(var(--glass-blur, 40px));
    background-color: transparent;
    background-image: linear-gradient(
          135deg,
          rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
          rgb(0 0 0 / 0%) 100%
        ),
        linear-gradient(
          var(--glass-reflex-degree, 100deg),
          rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
          rgb(0 0 0 / 0%) 25%
        );
    box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset,
        0 0 0 2px rgb(0 0 0 / 5%);
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.invisible {
  visibility: hidden;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.m-5 {
  margin: 1.25rem;
}

.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.mx-\\[18em\\] {
  margin-left: 18em;
  margin-right: 18em;
}

.my-\\[5em\\] {
  margin-top: 5em;
  margin-bottom: 5em;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-4 {
  margin-left: 1rem;
}

.flex {
  display: flex;
}

.h-6 {
  height: 1.5rem;
}

.h-8 {
  height: 2rem;
}

.h-full {
  height: 100%;
}

.h-screen {
  height: 100vh;
}

.h-5\\/6 {
  height: 83.333333%;
}

.h-3\\/6 {
  height: 50%;
}

.h-4\\/5 {
  height: 80%;
}

.h-\\[\\] {
  height: ;
}

.h-\\[80\\%\\] {
  height: 80%;
}

.h-1\\/6 {
  height: 16.666667%;
}

.h-\\[p\\] {
  height: p;
}

.w-6 {
  width: 1.5rem;
}

.w-8 {
  width: 2rem;
}

.-translate-x-1\\/4 {
  --tw-translate-x: -25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.flex-col {
  flex-direction: column;
}

.place-items-center {
  place-items: center;
}

.items-center {
  align-items: center;
}

.overflow-hidden {
  overflow: hidden;
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-opacity-40 {
  --tw-bg-opacity: 0.4;
}

.bg-opacity-20 {
  --tw-bg-opacity: 0.2;
}

.bg-opacity-100 {
  --tw-bg-opacity: 1;
}

.fill-current {
  fill: currentColor;
}

.p-5 {
  padding: 1.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-black {
  font-weight: 900;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\\:bg-black:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.hover\\:bg-opacity-100:hover {
  --tw-bg-opacity: 1;
}

.hover\\:bg-opacity-20:hover {
  --tw-bg-opacity: 0.2;
}

.hover\\:bg-opacity-40:hover {
  --tw-bg-opacity: 0.4;
}

.hover\\:bg-opacity-25:hover {
  --tw-bg-opacity: 0.25;
}

.hover\\:bg-opacity-15:hover {
  --tw-bg-opacity: 0.15;
}

.hover\\:bg-opacity-35:hover {
  --tw-bg-opacity: 0.35;
}

.hover\\:text-blue-500:hover {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.hover\\:text-blue-400:hover {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(30 58 138 / var(--tw-text-opacity));
}

.hover\\:text-blue-200:hover {
  --tw-text-opacity: 1;
  color: rgb(191 219 254 / var(--tw-text-opacity));
}

.hover\\:text-red-400:hover {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\\:text-orange-700:hover {
  --tw-text-opacity: 1;
  color: rgb(194 65 12 / var(--tw-text-opacity));
}

.hover\\:text-orange-400:hover {
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}

.hover\\:text-orange-300:hover {
  --tw-text-opacity: 1;
  color: rgb(253 186 116 / var(--tw-text-opacity));
}

.hover\\:text-orange-500:hover {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.group:hover .group-hover\\:visible {
  visibility: visible;
}

.group:hover .group-hover\\:relative {
  position: relative;
}

.group:hover .group-hover\\:translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.dark\\:text-gray-200:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-blue-400:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-white:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-red-400:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-orange-400:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-orange-500:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-orange-900:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(124 45 18 / var(--tw-text-opacity));
}
 `
    