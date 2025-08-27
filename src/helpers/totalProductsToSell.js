import totalStockProduct from "./totalStockProduct.js";
import totalNumberOfSoldProducts from "./totalNumberOfSoldProducts.js";

function totalProductsToSell() {
    const productsToSell = totalStockProduct() - totalNumberOfSoldProducts();
    return productsToSell;
}

export default totalProductsToSell;