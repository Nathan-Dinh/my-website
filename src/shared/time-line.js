import { LitElement, css, html } from "lit";
import { TWStyles } from "../css/tw";
import "./time-item";

export class TimeLine extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
    this.timeItem = [
      {
        date: "December 2022",
        header: "Chainsaw Man Web Page",
        content:
          "A web page that I created for practicing and introducing HTML, CSS, JAVASCRIPT",
        link: "https://github.com/Nathan-Dinh/chainsaw-man",
        img: "",
      },
      {
        date: "October 2023",
        header: "Patient Tracker",
        content:
          "This form serves as a rapid and dependable tool for capturing and managing patient information efficiently. It enables users to swiftly record essential details such as patient names, birth dates, medical issues, blood pressure, and more. Notably, this form boasts scalability, leveraging full CRUD functionality to ensure comprehensive data management and accessibility.",
        link: "https://github.com/Nathan-Dinh/patient-tracker",
        img: "",
      },
      {
        date: " January 2023",
        header: "Tic Tac Toe",
        content: "A simple Tic Tac Toe game that I created using React Vite",
        link: "https://github.com/Nathan-Dinh/tic-tac-toe",
        img: "",
      },
      {
        date: "November 2023 - December 2023",
        header: "Galactic Defender",
        content:
          "This is a small game I created using monogame. It is a take on the classical 2004 game Battlestar Galactica",
        link: "https://github.com/Nathan-Dinh/galactic-defender",
        img: "",
      },
      {
        date: "January 2024",
        header: "Arknight's Operator Web Scrapper",
        content:
          "This is just a basic learning project to familiarize myself with Python and web scraping.",
        link: "https://github.com/Nathan-Dinh/arknights-web-scrapper",
        img: "",
      },
      {
        date: "January 2024",
        header: "Op Finder",
        content:
          "This web application represents a small-scale project designed as an introductory showcase of Vue.js framework capabilities. Utilizing an API developed specifically for this purpose, the application revolves around a well-known mobile game, Arknights. Users can efficiently explore and retrieve basic information about various game operators up to a specified threshold through the search functionality provided.",
        link: "https://github.com/Nathan-Dinh/op-finder",
        img: "",
      }
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
            link=${timeItem.link}
          ></time-item>`;
        })}
      </ol>
    `;
  }
}

customElements.define("time-line", TimeLine);
