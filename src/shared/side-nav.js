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
    e.preventDefault();
    this.urlRoute(target.closest("a").href);
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
    return html`<nav class="relative group flex flex-col">
      <a
        @click=${this.handleNavigationClick}
        class=" mb-4 hover:text-blue-500 flex items-center"
        href="/"
      >
        <svg
          class="h-8 w-8 text-gray-500"
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
          class="hidden ml-4 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
        >
          Home
        </p>
      </a>
      <a
        class=" mb-4 hover:text-blue-500 flex items-center"
        @click=${this.handleNavigationClick}
        href="/projects"
        ><svg
          class="h-8 w-8 text-gray-500"
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
          <polyline points="5 7 10 12 5 17" />
          <line x1="13" y1="17" x2="19" y2="17" />
        </svg>
        <p
          class="hidden ml-4 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
        >
          Projects
        </p>
      </a>
      <a
        class=" mb-4 hover:text-blue-500 flex items-center"
        @click=${this.handleNavigationClick}
        href="/skills"
      >
        <svg
          class="h-8 w-8 text-gray-500"
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
          class="hidden ml-4 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
        >
          Skills
        </p></a
      >
      <a
        class=" mb-4 hover:text-blue-500 flex items-center"
        @click=${this.handleNavigationClick}
        href="/socials"
        ><svg
          class="h-8 w-8 text-gray-500"
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
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <circle cx="12" cy="14" r="3" />
          <line x1="12" y1="7" x2="12" y2="11" />
          <path d="M6.7 17.8l2.8 -2" />
          <path d="M17.3 17.8l-2.8 -2" />
        </svg>
        <p
          class="hidden ml-4 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
        >
          Socials
        </p>
      </a>
      <div>
        <img src=${this.src} @click=${this.toggleTheme} alt="icon" id="icon" />
      </div>
    </nav>`;
  }
}
customElements.define("side-nav", SideNavigation);
