import { async } from "regenerator-runtime";
import formatDollarToRupiah from "../utils/utils";
import axios from "axios";

const mainData = () => {
  const baseUrl = "https://fakestoreapi.com/products";
  const getItem = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      const data = await response.data;
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

      <div class="col col-sm-12 col-md-12 col-lg-4" style="margin-top: 12px; ">
      <div class="card h-100 w-70 column-container sm">
        <div class="card-body sm">
          <div class="container text-center" >
              <div class="col " style="position: relative;">
                <div class="container">
                  <span style="color: orange;
                  font-size: 1.5rem;
                  font-weight: bold;
                  position: absolute;
                  right: -29px;
                  top: -41px;
                  padding-left: 5px;
                  border-bottom-left-radius: 15px;
                  background-color: #7AA874;
                  ">&#9733; 
                  <span style="color: white; padding-right: 7px;">${item.rating.rate.toFixed(
                    1
                  )}</span>
                  </span>
                </div>
                <div class="col m-4">
                  <img src="${item.image}" width="200" height="200"/>
                </div>
                <div class="col mb-4 text-ellipsis" style="font-weight: bold; font-size: 14pt; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;"> ${
                  item.title
                }</div>
              </div>
          <div class="row">
            <div class="col my-auto">
                <div class="col cols-3" style="padding-top:3%; font-size: 15pt" id="usd">${formatDollarToRupiah(
                  item.price
                )}</div>
            </div>
              <button-app type="button" id="buttonPrice" class="col cols-3 btn my-auto" style="background-color: #FF6000; font-weight:bold; color: white; font-size:18px;">Checkout</button-app>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  getItem();
};

export default mainData;
