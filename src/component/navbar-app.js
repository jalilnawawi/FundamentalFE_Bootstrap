import css from "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <style>
    ${css}
    </style>

    <nav class="navbar bg-light my-4">
    <div class="container-fluid">
        <a class="navbar-brand">Keranjang Wishlist</a>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </nav>
    `;
  }
}
customElements.define("navbar-app", Navbar);
