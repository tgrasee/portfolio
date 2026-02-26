const headerTemplate = document.createElement('template');

// <style>
    //     header {
    //         background-color: #1F2937;
    //         display: flex;
    //         justify-content: space-between;
    //         align-items: center;
    //         padding: 0 48px 0;
    //         color: white;
    //     }

    //     ul {
    //         display: flex;
    //         list-style: none;
    //         gap: 16px;
    //         color: white;
    //     }

    //     a {
    //         text-decoration: none;
    //         color: #e5e7eb;
    //     }
    // </style>

headerTemplate.innerHTML = `
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
        <h3><a href="/portfolio/index.html">Tyler Grasee</a></h3>
        <nav>
            <ul>
                <li><a href="/portfolio/projects/googlemapapi/googleapi.html">Google Map API</a></li>
                <li><a href="/portfolio/projects/etchasketch/etchasketch.html">Etch-a-Sketch</a></li>
                <li><a href="/portfolio/projects/rockpaperscissors/rps.html">RPS Game</a></li>       
            </ul>
        </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);