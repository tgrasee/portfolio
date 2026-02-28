const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
    </style>
        <h3>Copyright © 2026 Tyler Grasee</h3>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);