import { LitElement, css, html } from "lit";
import { TWStyles } from "../css/tw";

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
  };
  static styles = [css``, TWStyles];

  render() {
    return html`<p class="bg-black">Hello!</p>`;
  }
}
customElements.define("simple-greeting", SimpleGreeting);
