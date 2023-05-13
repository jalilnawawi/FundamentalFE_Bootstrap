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

    <nav class="navbar navbar-expand-lg" style="padding:30px; background-color:#F5F3C1;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style="font-family: 'Poppins'; font-size: 40px; padding-left:100px">Fake Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
         
          <form class="d-flex" role="search" style="width:1090px; height:50px; padding-left:20px;">
            <input class="form-control me-2" type="search" placeholder="Search Item" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
         
        </div>
        <span style="font-size: 60px; margin-right:90px; transform: scaleX(-1);">
        &#128722;
        </span>
      </div>
    </nav>
    `;
  }
}

customElements.define("navbar-app", Navbar);
