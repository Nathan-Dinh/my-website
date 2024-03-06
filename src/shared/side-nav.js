import { LitElement, css, html } from "lit";
import { TWStyles } from "../css/tw";

export class SideNavigation extends LitElement {
  static styles = [
    css`
      :host {
        cursor: pointer;
      }
      #icon {
        width: 30px;
        cursor: pointer;
      }
    `,
    TWStyles,
  ];

  constructor() {
    super();
    this.toggleTheme = this.toggleTheme.bind(this);
    this.src = "./public/dark theme icon/sun.png";
    this.urlRoutes = {
      404: {
        page: "/src/pages/404.html",
        title: "404",
        description: "",
      },
      "/": {
        page: "/src/pages/index.html",
        title: "/",
        description: "",
      },
      "/projects": {
        page: "/src/pages/projects.html",
        title: "/",
        description: "",
      },
      "/skills": {
        page: "/src/pages/skills.html",
        title: "/",
        description: "",
      },
      "/socials": {
        page: "/src/pages/socials.html",
        title: "/",
        description: "",
      },
    };
  }

  firstUpdated() {
    this.urlLocationHandler();
    window.onpopstate = this.urlLocationHandler.bind(this);
  }

  handleNavigationClick(e) {
    const { target } = e;
    if (!target.matches("nav a")) {
      return;
    }
    e.preventDefault();
    this.urlRoute(target.href);
  }

  async urlLocationHandler() {
    let location = window.location.pathname;
    if (location.length === 0 || location === "/index.html") {
      location = "/";
    }
    const route = this.urlRoutes[location] || this.urlRoutes[404];
    window.history.pushState({}, "", route.title);
    const html = await fetch(route.page).then((response) => {
      return response.text();
    });
    document.getElementById("root").innerHTML = html;
  }

  urlRoute(href) {
    window.history.pushState({}, "", href);
    this.urlLocationHandler();
  }

  toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    if (html.dataset.theme === "dark") {
      html.dataset.theme = "light";
      this.shadowRoot.getElementById("icon").src =
        "./public/dark theme icon/moon.png";
    } else {
      html.dataset.theme = "dark";
      this.shadowRoot.getElementById("icon").src =
        "./public/dark theme icon/sun.png";
    }
  }

  render() {
    return html`<nav class="flex flex-col">
      <a class=" mb-2 hover:text-blue-500" @click=${this.handleNavigationClick} href="/">Home</a>
      <a class=" mb-2 hover:text-blue-500" @click=${this.handleNavigationClick} href="/projects">Projects</a>
      <a class=" mb-2 hover:text-blue-500" @click=${this.handleNavigationClick} href="/skills">skills</a>
      <a class=" mb-2 hover:text-blue-500" @click=${this.handleNavigationClick} href="/socials">Social</a>
      <div>
        <img src=${this.src} @click=${this.toggleTheme} alt="icon" id="icon" />
      </div>
    </nav>`;
  }
}
customElements.define("side-nav", SideNavigation);
