class ButtonCheckout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const buttonCheckout = document.querySelectorAll("#buttonPrice");
    buttonCheckout.forEach((button) => {
      button.addEventListener("click", () => {
        Swal.fire({
          imageUrl:
            "https://icon-library.com/images/mistake-icon/mistake-icon-4.jpg",
          imageHeight: 300,
          title: "Nantikan fitur checkout di versi terbaru Kami !!",
        });
      });
    });
  }
}

customElements.define("button-app", ButtonCheckout);
