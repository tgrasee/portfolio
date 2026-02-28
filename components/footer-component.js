const footerTemplate = document.createElement('fTemplate');

footerTemplate.innerHTML = `
    <style>
        ul {
            display: flex;
            list-style: none;
            gap: 16px;
            color: white;
        }

        a {
            text-decoration: none;
            color: #e5e7eb;
        }

        a:hover {
            color: #9ca3af;
        }
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