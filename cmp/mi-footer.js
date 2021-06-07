class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Sosa Manrique Mayte Paola.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
