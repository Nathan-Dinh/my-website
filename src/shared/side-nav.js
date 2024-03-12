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
      .light-gloss {
        background: rgba(53, 53, 53, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(53, 53, 53, 0.45);
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
    e.preventDefault();
    this.urlRoute(target.closest("a").href);
  }

  async urlLocationHandler() {
    let location = window.location.pathname;
    if (location.length === 0 || location === "/index.html") {
      location = "/";
    }
    const ROUTE = this.urlRoutes[location] || this.urlRoutes[404];
    const html = await fetch(ROUTE.page).then((response) => {
      return response.text();
    });
    document.getElementById("root").innerHTML = html;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  urlRoute(href) {
    window.history.pushState({}, "", href);
    this.urlLocationHandler();
  }

  toggleTheme() {
    const HTML = document.getElementsByTagName("html")[0];
    const MODE = this.shadowRoot.getElementById("mode");
    if (HTML.dataset.theme === "dracula") {
      HTML.dataset.theme = "cupcake";
      HTML.className = "light";
      MODE.innerHTML = "Dark";
      this.shadowRoot.getElementById("icon").src =
        "./public/dark theme icon/moon.png";
    } else {
      HTML.dataset.theme = "dracula";
      HTML.className = "dark";
      MODE.innerHTML = "Light";
      this.shadowRoot.getElementById("icon").src =
        "./public/dark theme icon/sun.png";
    }
  }

  render() {
    return html` <nav
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
    </nav>`;
  }
}
customElements.define("side-nav", SideNavigation);
