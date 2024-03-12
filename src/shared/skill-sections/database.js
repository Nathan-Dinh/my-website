import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/tw";

export class DatabaseSection extends LitElement {
  static styles = [css``, TWStyles];

  constructor() {
    super();
  }

  firstUpdated() {}

  render() {
    return html`
      <div>
        <header class="divider divider-primary">Database</header>
        <section class="flex gap-10 justify-center">
          <div class="w-10/12">
            <header class="divider divider-secondary">Non-Relational</header>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="Mongoose">
                <img
                  src="../../../public/icons/mongodb/mongodb-original.svg"
                  class="w-10 h-10"
                />
              </div>
            </section>
            <div class="divider divider-secondary">Relational</div>
            <section class="flex gap-10 justify-center">
              <div class="tooltip tooltip-close" data-tip="MySql">
                <img
                  src="../../../public/icons/mysql/mysql-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="Azure SQL">
                <img
                  src="../../../public/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  class="w-10 h-10"
                />
              </div>
              <div class="tooltip tooltip-close" data-tip="MSSql">
                <img
                  src="../../../public/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
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

customElements.define("data-section", DatabaseSection);
