import {inventory} from "../constants/inventory.js";

function totalNumberOfSoldProducts() {
    const totalSold = inventory.reduce((acc, tv) => {
        return acc + tv.sold;
    }, 0);

    return totalSold;
}

export default totalNumberOfSoldProducts;