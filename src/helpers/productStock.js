import {inventory} from "../constants/inventory.js";

function productStock() {
    const totalStock = inventory.reduce((acc, tv) => {
        return acc + tv.originalStock;
    }, 0);

    return totalStock;
}

export default productStock;