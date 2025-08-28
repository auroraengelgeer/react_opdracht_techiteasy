import productStock from "./productStock.js";
import soldProducts from "./soldProducts.js";

//
// function productsToSell() {
//     const productsToSell = productStock() - soldProducts();
//     return productsToSell;
// }
//
// export default productsToSell;

function productsToSell() {
    return productStock() - soldProducts();

}

export default productsToSell;