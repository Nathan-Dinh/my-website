
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
  color-scheme: light;
  --in: 0.7206 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 0.8471 0.199 83.87;
  --er: 0.7176 0.221 22.18;
  --pc: 0.152344 0.017892 200.026556;
  --sc: 0.15787 0.020249 356.29965;
  --ac: 0.158762 0.029206 78.618794;
  --nc: 0.847148 0.013247 313.189598;
  --inc: 0 0 0;
  --suc: 0 0 0;
  --wac: 0 0 0;
  --erc: 0 0 0;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --p: 0.76172 0.089459 200.026556;
  --s: 0.789351 0.101246 356.29965;
  --a: 0.793811 0.146032 78.618794;
  --n: 0.235742 0.066235 313.189598;
  --b1: 0.977882 0.00418 56.375637;
  --b2: 0.939822 0.007638 61.449292;
  --b3: 0.915861 0.006811 53.440502;
  --bc: 0.235742 0.066235 313.189598;
  --rounded-btn: 1.9rem;
  --tab-border: 2px;
  --tab-radius: 0.7rem;
}

[data-theme=cupcake] {
  color-scheme: light;
  --in: 0.7206 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 0.8471 0.199 83.87;
  --er: 0.7176 0.221 22.18;
  --pc: 0.152344 0.017892 200.026556;
  --sc: 0.15787 0.020249 356.29965;
  --ac: 0.158762 0.029206 78.618794;
  --nc: 0.847148 0.013247 313.189598;
  --inc: 0 0 0;
  --suc: 0 0 0;
  --wac: 0 0 0;
  --erc: 0 0 0;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --p: 0.76172 0.089459 200.026556;
  --s: 0.789351 0.101246 356.29965;
  --a: 0.793811 0.146032 78.618794;
  --n: 0.235742 0.066235 313.189598;
  --b1: 0.977882 0.00418 56.375637;
  --b2: 0.939822 0.007638 61.449292;
  --b3: 0.915861 0.006811 53.440502;
  --bc: 0.235742 0.066235 313.189598;
  --rounded-btn: 1.9rem;
  --tab-border: 2px;
  --tab-radius: 0.7rem;
}

[data-theme=dracula] {
  color-scheme: dark;
  --b2: 0.268053 0.020556 277.508664;
  --b3: 0.247877 0.019009 277.508664;
  --pc: 0.150922 0.036614 346.812432;
  --sc: 0.148405 0.029709 301.883095;
  --ac: 0.166785 0.024826 66.558491;
  --nc: 0.878891 0.006515 275.524078;
  --inc: 0.176526 0.018676 212.846491;
  --suc: 0.174199 0.043903 148.024881;
  --wac: 0.191068 0.026849 112.757109;
  --erc: 0.136441 0.041266 24.430965;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 0.754611 0.18307 346.812432;
  --s: 0.742023 0.148546 301.883095;
  --a: 0.833927 0.124132 66.558491;
  --n: 0.394456 0.032576 275.524078;
  --b1: 0.288229 0.022103 277.508664;
  --bc: 0.977477 0.007913 106.545019;
  --in: 0.88263 0.09338 212.846491;
  --su: 0.870995 0.219516 148.024881;
  --wa: 0.955338 0.134246 112.757109;
  --er: 0.682204 0.206328 24.430965;
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

.avatar.online:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)));
  outline-style: solid;
  outline-width: 2px;
  outline-color: var(--fallback-b1,oklch(var(--b1)/1));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
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

.-start-1 {
  inset-inline-start: -0.25rem;
}

.-start-1\\.5 {
  inset-inline-start: -0.375rem;
}

.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.my-\\[5em\\] {
  margin-top: 5em;
  margin-bottom: 5em;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-4 {
  margin-left: 1rem;
}

.ml-\\[12em\\] {
  margin-left: 12em;
}

.ms-2 {
  margin-inline-start: 0.5rem;
}

.ms-4 {
  margin-inline-start: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-1\\.5 {
  margin-top: 0.375rem;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.h-3 {
  height: 0.75rem;
}

.h-8 {
  height: 2rem;
}

.h-full {
  height: 100%;
}

.h-6 {
  height: 1.5rem;
}

.h-10 {
  height: 2.5rem;
}

.min-h-screen {
  min-height: 100vh;
}

.w-3 {
  width: 0.75rem;
}

.w-8 {
  width: 2rem;
}

.w-\\[auto\\] {
  width: auto;
}

.w-6 {
  width: 1.5rem;
}

.w-10 {
  width: 2.5rem;
}

.w-1 {
  width: 0.25rem;
}

.max-w-\\[60\\%\\] {
  max-width: 60%;
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

.justify-center {
  justify-content: center;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-s {
  border-inline-start-width: 1px;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.fill-current {
  fill: currentColor;
}

.p-5 {
  padding: 1.25rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.text-\\[2\\.5rem\\] {
  font-size: 2.5rem;
}

.text-\\[3\\.5rem\\] {
  font-size: 3.5rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-light {
  font-weight: 300;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.leading-none {
  line-height: 1;
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
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

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.hover\\:bg-opacity-35:hover {
  --tw-bg-opacity: 0.35;
}

.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.hover\\:text-orange-500:hover {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.focus\\:z-10:focus {
  z-index: 10;
}

.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-gray-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity));
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

.rtl\\:rotate-180:where([dir="rtl"], [dir="rtl"] *) {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.dark\\:border-gray-600:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.dark\\:border-gray-700:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.dark\\:border-gray-900:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.dark\\:bg-gray-700:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.dark\\:bg-gray-800:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.dark\\:text-gray-400:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.dark\\:text-gray-500:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.dark\\:hover\\:bg-gray-700:hover:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.dark\\:hover\\:text-white:hover:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:focus\\:ring-gray-700:focus:where(.dark, .dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}
 `
    