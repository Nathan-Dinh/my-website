import { LitElement, css, html } from "lit";
import { TWStyles } from "../css/tw";

export class TimeItem extends LitElement {
  static properties = {
    date: { type: String },
    header: { type: String },
    content: { type: String },
    link: { type: String },
  };
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  render() {
    return html`<li class="mb-10 ms-4">
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
    </li>`;
  }
}

customElements.define("time-item", TimeItem);
