/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={903:(t,e,r)=>{r.d(e,{K:()=>i});const i=r(957).AH` /*
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

@media (hover:hover) {
  .menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
  }
}

.divider {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1rem;
  white-space: nowrap;
}

.divider:before,
  .divider:after {
  height: 0.125rem;
  width: 100%;
  flex-grow: 1;
  --tw-content: '';
  content: var(--tw-content);
  background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
}

@media (hover: hover) {
  :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @supports (color: oklch(0 0 0)) {
    :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
      background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
    }
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

.menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
}

.menu :where(li ul) {
  position: relative;
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: 0.5rem;
}

.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  display: grid;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.menu li.disabled {
  cursor: not-allowed;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  color: var(--fallback-bc,oklch(var(--bc)/0.3));
}

.menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {
  display: none;
}

:where(.menu li) {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}

:where(.menu li) .badge {
  justify-self: end;
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

.divider:not(:empty) {
  gap: 1rem;
}

.divider-primary:before,
  .divider-primary:after {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
}

.divider-secondary:before,
  .divider-secondary:after {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)));
}

.link:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

:where(.menu li:empty) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.1;
  margin: 0.5rem 1rem;
  height: 1px;
}

.menu :where(li ul):before {
  position: absolute;
  bottom: 0.75rem;
  inset-inline-start: 0px;
  top: 0.75rem;
  width: 1px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.1;
  content: "";
}

.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, 0.5rem);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: start;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
  text-wrap: balance;
}

:where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):is(summary):not(.active, .btn):focus-visible, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):is(summary):not(.active, .btn):focus-visible {
  cursor: pointer;
  background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
}

.menu :where(li > details > summary)::-webkit-details-marker {
  display: none;
}

.menu :where(li > details > summary):after,
.menu :where(li > .menu-dropdown-toggle):after {
  justify-self: end;
  display: block;
  margin-top: -0.5rem;
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(45deg);
  transition-property: transform, margin-top;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  transform-origin: 75% 75%;
  box-shadow: 2px 2px;
  pointer-events: none;
}

.menu :where(li > details[open] > summary):after,
.menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {
  transform: rotate(225deg);
  margin-top: 0;
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

.tooltip {
  position: relative;
  display: inline-block;
  --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));
}

.tooltip:before {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  content: var(--tw-content);
  --tw-content: attr(data-tip);
}

.tooltip:before, .tooltip-top:before {
  transform: translateX(-50%);
  top: auto;
  left: 50%;
  right: auto;
  bottom: var(--tooltip-offset);
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

.tooltip {
  position: relative;
  display: inline-block;
  text-align: center;
  --tooltip-tail: 0.1875rem;
  --tooltip-color: var(--fallback-n,oklch(var(--n)/1));
  --tooltip-text-color: var(--fallback-nc,oklch(var(--nc)/1));
  --tooltip-tail-offset: calc(100% + 0.0625rem - var(--tooltip-tail));
}

.tooltip:before,
.tooltip:after {
  opacity: 0;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-delay: 100ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip:after {
  position: absolute;
  content: "";
  border-style: solid;
  border-width: var(--tooltip-tail, 0);
  width: 0;
  height: 0;
  display: block;
}

.tooltip:before {
  max-width: 20rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: var(--tooltip-color);
  color: var(--tooltip-text-color);
  width: -moz-max-content;
  width: max-content;
}

.tooltip.tooltip-open:before {
  opacity: 1;
  transition-delay: 75ms;
}

.tooltip.tooltip-open:after {
  opacity: 1;
  transition-delay: 75ms;
}

.tooltip:hover:before {
  opacity: 1;
  transition-delay: 75ms;
}

.tooltip:hover:after {
  opacity: 1;
  transition-delay: 75ms;
}

.tooltip:has(:focus-visible):after,
.tooltip:has(:focus-visible):before {
  opacity: 1;
  transition-delay: 75ms;
}

.tooltip:not([data-tip]):hover:before,
.tooltip:not([data-tip]):hover:after {
  visibility: hidden;
  opacity: 0;
}

.tooltip:after, .tooltip-top:after {
  transform: translateX(-50%);
  border-color: var(--tooltip-color) transparent transparent transparent;
  top: auto;
  left: 50%;
  right: auto;
  bottom: var(--tooltip-tail-offset);
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

.my-\\[2em\\] {
  margin-top: 2em;
  margin-bottom: 2em;
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

.mt-4 {
  margin-top: 1rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.hidden {
  display: none;
}

.h-10 {
  height: 2.5rem;
}

.h-3 {
  height: 0.75rem;
}

.h-5 {
  height: 1.25rem;
}

.h-8 {
  height: 2rem;
}

.h-full {
  height: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.w-10 {
  width: 2.5rem;
}

.w-10\\/12 {
  width: 83.333333%;
}

.w-3 {
  width: 0.75rem;
}

.w-4\\/6 {
  width: 66.666667%;
}

.w-5 {
  width: 1.25rem;
}

.w-8 {
  width: 2rem;
}

.w-\\[80\\%\\] {
  width: 80%;
}

.w-\\[auto\\] {
  width: auto;
}

.w-full {
  width: 100%;
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

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.gap-10 {
  gap: 2.5rem;
}

.rounded {
  border-radius: 0.25rem;
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

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-purple-400 {
  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-emerald-400 {
  --tw-gradient-to: #34d399 var(--tw-gradient-to-position);
}

.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}

.fill-current {
  fill: currentColor;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
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

.pb-20 {
  padding-bottom: 5rem;
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

.text-transparent {
  color: transparent;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
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

@media (min-width: 640px) {
  .sm\\:mx-\\[2em\\] {
    margin-left: 2em;
    margin-right: 2em;
  }
}

@media (min-width: 768px) {
  .md\\:block {
    display: block;
  }

  .md\\:hidden {
    display: none;
  }
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

.dark\\:bg-blue-600:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
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

@media (min-width: 768px) {
  .md\\:dark\\:hover\\:text-white:hover:where(.dark, .dark *) {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}
 `},205:(t,e,r)=>{var i=r(957),o=r(903);r(712);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super()}render(){return i.qy`<footer class="flex flex-col place-items-center py-6">
      <social-icons svgWidth="6" svgHeight="6"></social-icons>
      <div>© 2024 • Nathan Dinh</div>
    </footer>`}}customElements.define("page-footer",a)},113:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static properties={svgWidth:{type:String},svgHeight:{type:String}};static styles=[i.AH``,o.K];constructor(){super()}render(){return i.qy`
      <nav
        class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col">
          <div class="flex justify-end">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              class=" w-10 h-10 text-sm text-gray-500 rounded-lg"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div class="block w-full" id="navbar-hamburger">
            <ul
              class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `}}customElements.define("mobile-side-nav",a)},585:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static styles=[i.AH`
      :host {
        cursor: pointer;
      }
      #icon {
        width: 30px;
        cursor: pointer;
      }
      .light-gloss {
        background: rgba(53, 53, 53, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(53, 53, 53, 0.45);
      }
    `,o.K];constructor(){super(),this.toggleTheme=this.toggleTheme.bind(this),this.src="./public/dark theme icon/sun.png",this.urlRoutes={404:{page:"/src/pages/404.html",title:"404",description:""},"/":{page:"/src/pages/index.html",title:"/",description:""},"/projects":{page:"/src/pages/projects.html",title:"/",description:""},"/skills":{page:"/src/pages/skills.html",title:"/",description:""},"/socials":{page:"/src/pages/socials.html",title:"/",description:""}}}firstUpdated(){this.urlLocationHandler(),window.onpopstate=this.urlLocationHandler.bind(this)}handleNavigationClick(t){const{target:e}=t;t.preventDefault(),this.urlRoute(e.closest("a").href)}async urlLocationHandler(){let t=window.location.pathname;0!==t.length&&"/index.html"!==t||(t="/");const e=this.urlRoutes[t]||this.urlRoutes[404],r=await fetch(e.page).then((t=>t.text()));document.getElementById("root").innerHTML=r,window.scrollTo({top:0,behavior:"smooth"})}urlRoute(t){window.history.pushState({},"",t),this.urlLocationHandler()}toggleTheme(){const t=document.getElementsByTagName("html")[0],e=this.shadowRoot.getElementById("mode");"dracula"===t.dataset.theme?(t.dataset.theme="cupcake",t.className="light",e.innerHTML="Dark",this.shadowRoot.getElementById("icon").src="./public/dark theme icon/moon.png"):(t.dataset.theme="dracula",t.className="dark",e.innerHTML="Light",this.shadowRoot.getElementById("icon").src="./public/dark theme icon/sun.png")}render(){return i.qy` <nav
      class="flex flex-col h-full fixed justify-center light-gloss group "
    >
      <a
        @click=${this.handleNavigationClick}
        class="px-5 py-2 mb-4 flex items-center hover:bg-gray-600 hover:bg-opacity-35"
        href="/"
      >
        <svg
          class="h-8 w-8 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <p
          class="ml-4 text-xl font-medium size invisible group-hover:visible absolute group-hover:relative transform -translate-x-1/4 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
        >
          Home
        </p>
      </a>
      <a
        class="px-5 py-2 mb-4 flex items-center hover:bg-gray-600 hover:bg-opacity-35 "
        @click=${this.handleNavigationClick}
        href="/projects"
        ><svg
          class="h-8 w-8 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>

        <p
          class=" ml-4 text-xl font-medium invisible group-hover:visible absolute group-hover:relative transform -translate-x-1/4 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
        >
          Projects
        </p>
      </a>
      <a
        class="px-5 py-2 mb-4 flex items-center hover:bg-gray-600 hover:bg-opacity-35"
        @click=${this.handleNavigationClick}
        href="/skills"
      >
        <svg
          class="h-8 w-8 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="12 4 4 8 12 12 20 8 12 4" />
          <polyline points="4 12 12 16 20 12" />
          <polyline points="4 16 12 20 20 16" />
        </svg>
        <p
          class="ml-4 text-xl font-medium invisible group-hover:visible absolute group-hover:relative  transform -translate-x-1/4 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
        >
          Tech Stack
        </p></a
      >
      <div class="px-5 py-2 flex" @click=${this.toggleTheme}>
        <img src=${this.src} alt="icon" id="icon" />
        <p
          id="mode"
          class="ml-4 text-xl font-medium invisible group-hover:visible absolute group-hover:relative transform -translate-x-1/4 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
        >
          Light
        </p>
      </div>
    </nav>`}}customElements.define("side-nav",a)},689:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super()}firstUpdated(){}render(){return i.qy`
      <div class="w-full">
        <header class="divider divider-primary">Backend</header>
        <section class="flex flex-col items-center">
          <div class="tooltip tooltip-close" data-tip="Node JS">
            <img
              src="../../../public/icons/nodejs/nodejs-original.svg"
              class="w-10 h-10"
            />
          </div>
          <div class="w-10/12">
            <header class="divider divider-secondary">Framework</header>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Express">
                <img
                  src="../../../public/icons/express/express-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
            <div class="divider divider-secondary">Library</div>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Mongoose">
                <img
                  src="../../../public/icons/mongoose/mongoose-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    `}}customElements.define("back-section",a)},532:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super()}firstUpdated(){}render(){return i.qy`
      <div>
        <header class="divider divider-primary">Database</header>
        <section class="flex gap-10 justify-center">
          <div class="w-10/12">
            <header class="divider divider-secondary">Non-Relational</header>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Mongoose">
                <img
                  src="../../../public/icons/mongodb/mongodb-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
            <div class="divider divider-secondary">Relational</div>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="MySql">
                <img
                  src="../../../public/icons/mysql/mysql-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Azure SQL">
                <img
                  src="../../../public/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="MSSql">
                <img
                  src="../../../public/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    `}}customElements.define("data-section",a)},965:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super()}firstUpdated(){}render(){return i.qy`
      <div class="w-full">
        <header class="divider divider-primary">Frontend</header>
        <section class="flex gap-10 justify-center">
          <div class="w-10/12">
            <header class="divider divider-secondary">Framework</header>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="React">
                <img
                  src="../../../public/icons/react/react-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Vue">
                <img
                  src="../../../public/icons/vuejs/vuejs-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Angular">
                <img
                  src="../../../public/icons/angular/angular-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
            <div class="divider divider-secondary">Library</div>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Jquery">
                <img
                  src="../../../public/icons/jquery/jquery-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Redux">
                <img
                  src="../../../public/icons/redux/redux-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="React Router">
                <img
                  src="../../../public/icons/reactrouter/reactrouter-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    `}}customElements.define("font-section",a)},466:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super()}firstUpdated(){}render(){return i.qy`
      <div class="w-full">
        <header class="divider divider-primary">Languages</header>
        <section class="flex gap-10 justify-center ">
          <div class="tooltip tooltip-close" data-tip="C Sharp">
            <img
              src="../../../public/icons/csharp/csharp-original.svg"
              class="w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Javascript">
            <img
              src="../../../public/icons/javascript/javascript-original.svg"
              class="w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Html5">
            <img
              src="../../../public/icons/html5/html5-original.svg"
              class="w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="css3">
            <img
              src="../../../public/icons/css3/css3-original.svg"
              class="w-10 h-10"
            />
          </div>
        </section>
      </div>
    `}}customElements.define("lang-section",a)},799:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super()}firstUpdated(){}render(){return i.qy`
      <div>
        <header class="divider divider-primary">Other</header>
        <section class="flex gap-10 justify-center">
          <div class="tooltip tooltip-close" data-tip="Github">
            <img
              src="../../../public/icons/github/github-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Window">
            <img
              src="../../../public/icons/windows11/windows11-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Azure Dev Ops">
            <img
              src="../../../public/icons/azuredevops/azuredevops-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Ubuntu">
            <img
              src="../../../public/icons/ubuntu/ubuntu-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
        </section>
      </div>
    `}}customElements.define("other-section",a)},712:(t,e,r)=>{var i=r(957),o=r(903);r(283);class a extends i.WF{static properties={svgWidth:{type:String},svgHeight:{type:String}};static styles=[i.AH``,o.K];constructor(){super()}render(){return i.qy`<div class="flex">
      <a
        class="text-sm hover:text-orange-500"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Nathan-Dinh"
        ><span class="sr-only">github</span
        ><svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current h-${this.svgHeight} w-${this.svgWidth}"
        >
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          ></path></svg
      ></a>
      <a
        class="mx-3 text-sm hover:text-orange-500"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/nathandinh67/"
        ><span class="sr-only">linkedin</span
        ><svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current h-${this.svgHeight} w-${this.svgWidth}"
        >
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          ></path></svg
      ></a>
    </div> `}}customElements.define("social-icons",a)},283:(t,e,r)=>{var i=r(957),o=r(903);class a extends i.WF{static properties={date:{type:String},header:{type:String},content:{type:String},link:{type:String}};static styles=[i.AH``,o.K];constructor(){super()}render(){return i.qy`<li class="mb-10 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >${this.date}</time
      >
      <h3 class="text-lg font-semibold">${this.header}</h3>
      <p class="mb-4 text-base font-normal ">
        ${this.content}
      </p>
      <a
        href=${this.link}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >Source Code
        <svg
          class="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          /></svg
      ></a>
    </li>`}}customElements.define("time-item",a)},434:(t,e,r)=>{var i=r(957),o=r(903);r(283);class a extends i.WF{static styles=[i.AH``,o.K];constructor(){super(),this.timeItem=[{date:"December 2022",header:"Chainsaw Man Web Page",content:"A web page that I created for practicing and introducing HTML, CSS, JAVASCRIPT",link:"https://github.com/Nathan-Dinh/chainsaw-man",img:""},{date:"October 2023",header:"Patient Tracker",content:"This form serves as a rapid and dependable tool for capturing and managing patient information efficiently. It enables users to swiftly record essential details such as patient names, birth dates, medical issues, blood pressure, and more. Notably, this form boasts scalability, leveraging full CRUD functionality to ensure comprehensive data management and accessibility.",link:"https://github.com/Nathan-Dinh/patient-tracker",img:""},{date:" January 2023",header:"Tic Tac Toe",content:"A simple Tic Tac Toe game that I created using React Vite",link:"https://github.com/Nathan-Dinh/tic-tac-toe",img:""},{date:"November 2023 - December 2023",header:"Galactic Defender",content:"This is a small game I created using monogame. It is a take on the classical 2004 game Battlestar Galactica",link:"https://github.com/Nathan-Dinh/galactic-defender",img:""},{date:"January 2024",header:"Arknight's Operator Web Scrapper",content:"This is just a basic learning project to familiarize myself with Python and web scraping.",link:"https://github.com/Nathan-Dinh/arknights-web-scrapper",img:""},{date:"January 2024",header:"Op Finder",content:"This web application represents a small-scale project designed as an introductory showcase of Vue.js framework capabilities. Utilizing an API developed specifically for this purpose, the application revolves around a well-known mobile game, Arknights. Users can efficiently explore and retrieve basic information about various game operators up to a specified threshold through the search functionality provided.",link:"https://github.com/Nathan-Dinh/op-finder",img:""}]}render(){return i.qy`
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        ${this.timeItem.map((t=>i.qy`<time-item
            date=${t.date}
            content=${t.content}
            header=${t.header}
            link=${t.link}
          ></time-item>`))}
      </ol>
    `}}customElements.define("time-line",a)},957:(t,e,r)=>{r.d(e,{WF:()=>ct,AH:()=>l,qy:()=>V});const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class n{constructor(t,e,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new n(r,t,a)},c=(t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=r.cssText,t.appendChild(e)}},d=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:h,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:b}=Object,f=globalThis,v=f.trustedTypes,w=v?v.emptyScript:"",y=f.reactiveElementPolyfillSupport,k=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},$=(t,e)=>!h(t,e),_={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&p(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const a=i?.call(this);o.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,e=[...g(t),...m(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??$)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[k("elementProperties")]=new Map,A[k("finalized")]=new Map,y?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.0.4");const S=globalThis,E=S.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,z="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,U="?"+H,P=`<${U}>`,R=document,j=()=>R.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,D=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,F=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),V=F(1),K=(F(2),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),X=new WeakMap,J=R.createTreeWalker(R,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const r=t.length-1,i=[];let o,a=2===e?"<svg>":"",s=O;for(let e=0;e<r;e++){const r=t[e];let n,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===O?"!--"===l[1]?s=L:void 0!==l[1]?s=D:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=I):void 0!==l[3]&&(s=I):s===I?">"===l[0]?(s=o??O,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?I:'"'===l[3]?W:q):s===W||s===q?s=I:s===L||s===D?s=O:(s=I,o=void 0);const h=s===I&&t[e+1].startsWith("/>")?" ":"";a+=s===O?r+P:c>=0?(i.push(n),r.slice(0,c)+z+r.slice(c)+H+h):r+H+(-2===c?e:h)}return[G(t,a+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class Q{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,a=0;const s=t.length-1,n=this.parts,[l,c]=Z(t,e);if(this.el=Q.createElement(l,r),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&n.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(z)){const e=c[a++],r=i.getAttribute(t).split(H),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:s[2],strings:r,ctor:"."===s[1]?ot:"?"===s[1]?at:"@"===s[1]?st:it}),i.removeAttribute(t)}else t.startsWith(H)&&(n.push({type:6,index:o}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(H),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],j()),J.nextNode(),n.push({type:2,index:++o});i.append(t[e],j())}}}else if(8===i.nodeType)if(i.data===U)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(H,t+1));)n.push({type:7,index:o}),t+=H.length-1}o++}}static createElement(t,e){const r=R.createElement("template");return r.innerHTML=t,r}}function tt(t,e,r=t,i){if(e===K)return e;let o=void 0!==i?r._$Co?.[i]:r._$Cl;const a=T(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(e=tt(t,o._$AS(t,e.values),o,i)),e}class et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??R).importNode(e,!0);J.currentNode=i;let o=J.nextNode(),a=0,s=0,n=r[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new rt(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new nt(o,this,t)),this._$AV.push(e),n=r[++s]}a!==n?.index&&(o=J.nextNode(),a++)}return J.currentNode=R,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),T(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Y&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Q.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new et(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new Q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new rt(this.S(j()),this.S(j()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(t,e=this,r,i){const o=this.strings;let a=!1;if(void 0===o)t=tt(this,t,e,0),a=!T(t)||t!==this._$AH&&t!==K,a&&(this._$AH=t);else{const i=t;let s,n;for(t=o[0],s=0;s<o.length-1;s++)n=tt(this,i[r+s],e,s),n===K&&(n=this._$AH[s]),a||=!T(n)||n!==this._$AH[s],n===Y?t=Y:t!==Y&&(t+=(n??"")+o[s+1]),this._$AH[s]=n}a&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class at extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class st extends it{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??Y)===K)return;const r=this._$AH,i=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==Y&&(r===Y||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const lt=S.litHtmlPolyfillSupport;lt?.(Q,rt),(S.litHtmlVersions??=[]).push("3.1.2");class ct extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=r?.renderBefore??null;i._$litPart$=o=new rt(e.insertBefore(j(),t),t,void 0,r??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const dt=globalThis.litElementPolyfillSupport;dt?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.4")}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,r),a.exports}r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(283),r(585),r(205),r(434),r(712),r(466),r(965),r(689),r(532),r(799),r(113)})();