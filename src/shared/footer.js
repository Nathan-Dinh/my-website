import { LitElement, css, html } from "lit";
import { TWStyles } from "../css/tw";
import "./socials";

export class Footer extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  render() {
    return html`<footer class="flex flex-col place-items-center py-6">
      <social-icons svgWidth="6" svgHeight="6"></social-icons>
      <div>© 2024 • Nathan Dinh</div>
    </footer>`;
  }
}

customElements.define("page-footer", Footer);
