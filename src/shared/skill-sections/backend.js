import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/tw";

export class BackendSection extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  firstUpdated() {}

  render() {
    return html`
      <div class="w-full">
        <header class="divider divider-primary">Backend</header>
        <section class="flex flex-col items-center">
          <div class="tooltip tooltip-close" data-tip="Node JS">
            <img
              src="../../../public/icons/nodejs/nodejs-original.svg"
              class="w-10 h-10"
            />
          </div>
          <div class="w-10/12">
            <header class="divider divider-secondary">Framework</header>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Express">
                <img
                  src="../../../public/icons/express/express-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
            <div class="divider divider-secondary">Library</div>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Mongoose">
                <img
                  src="../../../public/icons/mongoose/mongoose-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define("back-section", BackendSection);
