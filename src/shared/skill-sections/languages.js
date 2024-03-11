import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/tw";

export class LanguagesSection extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  firstUpdated() {}

  render() {
    return html`
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
    `;
  }
}

customElements.define("lang-section", LanguagesSection);
