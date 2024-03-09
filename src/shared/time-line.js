import { LitElement, css, html } from "lit";
import { TWStyles } from "../css/tw";
import "./time-item";

export class TimeLine extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
    this.timeItem = [
      {
        date: "February 2022",
        header: "Application UI code in Tailwind CSS",
        content:
          "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        link: "",
        img: ""
      },
    ];
  }


  render() {
    return html`
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        ${this.timeItem.map((timeItem) => {
          return html`<time-item
            date=${timeItem.date}
            content=${timeItem.content}
            header=${timeItem.header}
          ></time-item>`;
        })}
      </ol>
    `;
  }
}

customElements.define("time-line", TimeLine);
