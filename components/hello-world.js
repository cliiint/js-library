export { HelloWorldComponent };

class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <h1>hello world</h1>
    `;
  }

  connectedCallback() {
    console.log('hello world');
  }
}

customElements.define('hello-world', HelloWorldComponent);