import GetItemsFromAPI from "./GetPriceAPI.js";
import { tempProducts } from "./GetPriceAPI.js";

export default class Proxy {
  constructor() {
    this.getValue = function (item) {
      const demandedItem = tempProducts.find(
        (product) => product.name === item
      );
      if (demandedItem) {
        console.log("Data are taken from the proxy...");
        return demandedItem.price;
      }
      return new GetItemsFromAPI().getValue(item);
    };
  }
}
