import {inventory} from "../constants/inventory.js";

function totalStockProduct() {
    const totalStock = inventory.reduce((acc, tv) => {
        return acc + tv.originalStock;
    }, 0);

    return totalStock;
}

export default totalStockProduct;