import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/tw";

export class OtherSection extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  firstUpdated() {}

  render() {
    return html`
      <div>
        <header class="divider divider-primary">Other</header>
        <section class="flex gap-10 justify-center">
          <div class="tooltip tooltip-close" data-tip="Github">
            <img
              src="../../../public/icons/github/github-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Window">
            <img
              src="../../../public/icons/windows11/windows11-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Azure Dev Ops">
            <img
              src="../../../public/icons/azuredevops/azuredevops-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
          <div class="tooltip tooltip-close" data-tip="Ubuntu">
            <img
              src="../../../public/icons/ubuntu/ubuntu-original.svg"
              class="fill-current w-10 h-10"
            />
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define("other-section", OtherSection);
