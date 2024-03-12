import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/tw";

export class FrontendSection extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  firstUpdated() {}

  render() {
    return html`
      <div class="w-full">
        <header class="divider divider-primary">Frontend</header>
        <section class="flex gap-10 justify-center">
          <div class="w-10/12">
            <header class="divider divider-secondary">Framework</header>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="React">
                <img
                  src="../../../public/icons/react/react-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Vue">
                <img
                  src="../../../public/icons/vuejs/vuejs-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Angular">
                <img
                  src="../../../public/icons/angular/angular-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
            <div class="divider divider-secondary">Library</div>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Jquery">
                <img
                  src="../../../public/icons/jquery/jquery-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Redux">
                <img
                  src="../../../public/icons/redux/redux-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="React Router">
                <img
                  src="../../../public/icons/reactrouter/reactrouter-original.svg"
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

customElements.define("font-section", FrontendSection);
