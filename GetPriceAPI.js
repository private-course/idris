import productList from "./productList.js";

export let tempProducts = [];
export default class GetItemsFromAPI {
  constructor() {
    this.getValue = function (item) {
      const demandedItem = productList.find((product) => product.name === item);
      if (demandedItem) {
        console.log("Data are taken from databank...");
        tempProducts.push(demandedItem);
        return demandedItem.price;
      }
      return "Sorry, we dont have that one...";
    };
  }
}
