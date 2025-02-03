import Proxy from "./proxy.js";

let deneme = new Proxy();

console.log(deneme.getValue("ekmek"));
console.log(deneme.getValue("su"));
console.log(deneme.getValue("makarna"));
console.log(deneme.getValue("su"));
console.log(deneme.getValue("makarna"));
console.log(deneme.getValue("balik"));
