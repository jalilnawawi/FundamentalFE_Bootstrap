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
  
    <nav class="navbar navbar-expand-lg" style=" background-color:#F5F3C1; ">
      <div style="margin-left:auto; margin-right: auto;">
        
        <a class="navbar-brand" href="#" style="font-family: 'Poppins'; font-size: 40px; margin-left:20px">Fake Store</a>
        <span style="font-size: 60px;">
          &#128722;
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <input class="form-control me-2 p-2" placeholder="Search Item" aria-label="Search">
          <button class="btn btn-outline-success" id="buttonSearch">Search</button>
        </div>
      </div>
    </nav>
    `;

    const buttonSearch = this.shadowRoot.querySelector("#buttonSearch");
    buttonSearch.addEventListener("click", () => {
      Swal.fire({
        imageUrl:
          "https://icon-library.com/images/mistake-icon/mistake-icon-4.jpg",
        imageHeight: 300,
        title: "Maaf fitur search akan tersedia di versi terbaru Kami !!",
      });
    });
  }
}

customElements.define("navbar-app", Navbar);
