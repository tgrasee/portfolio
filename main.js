class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            <h3><a href="/portfolio/index.html">Tyler Grasee</a></h3>
            <ul>
                <li><a href="">Google Map API</a></li>
                <li><a href="/portfolio/projects/etchasketch/etchasketch.html">Etch-a-Sketch</a></li>
                <li><a href="/portfolio/projects/rockpaperscissors/rps.html">RPS Game</a></li>       
            </ul>
        </header>
    `;
  }
}

customElements.define('header-component', Header, { extends: 'header' });