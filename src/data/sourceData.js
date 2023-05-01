import { async } from "regenerator-runtime";

function sourceData() {
  const baseUrl = "https://fakestoreapi.com/products";
  const getItem = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      renderAllItems(data);
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllItems = (items) => {
    const listItemElement = document.querySelector("#listItem");
    listItemElement.innerHTML = "";

    items.forEach((item) => {
      listItemElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h4>${item.title}</h4>
              <h5> USD ${item.price}</h5>
              <img src="${item.image}" width="250" height="250"/>
              <button type="button" class="btn btn-danger button-delete" id="${item.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemId = event.target.id;

        removeItem(itemId);
      });
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputItemId = document.querySelector("#inputItemId");
    const inputItemTitle = document.querySelector("#inputItemTitle");
    const inputItemPrice = document.querySelector("#inputItemPrice");
    const inputItemDesc = document.querySelector("#inputItemDesc");
    const inputItemImage = document.querySelector("#inputItemImage");
    const inputItemCat = document.querySelector("#inputItemCat");
    const buttonSave = document.querySelector("#buttonSave");
    const buttonUpdate = document.querySelector("#buttonUpdate");

    buttonSave.addEventListener("click", function () {
      const item = {
        id: Number.parseInt(inputItemId.value),
        title: inputItemTitle.value,
        price: inputItemPrice.value,
        desc: inputItemDesc.value,
        image: inputItemImage.value,
        cat: inputItemCat.value,
      };

      insertItem(item);
      console.log(item);
    });

    buttonUpdate.addEventListener("click", function () {
      const item = {
        id: Number.parseInt(inputItemId.value),
        title: inputItemTitle.value,
        price: inputItemPrice.value,
        image: inputItemImage.value,
      };

      updateItem(item);
    });
    getItem();
  });
}

export default sourceData;
