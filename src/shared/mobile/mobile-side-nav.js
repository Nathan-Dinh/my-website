import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/tw";

export class MobileSideNav extends LitElement {
  static properties = {
    svgWidth: { type: String },
    svgHeight: { type: String },
  };

  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  render() {
    return html`
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
    `;
  }
}

customElements.define("mobile-side-nav", MobileSideNav);
