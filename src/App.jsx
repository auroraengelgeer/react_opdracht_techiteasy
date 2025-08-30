import './App.css';
import soldProducts from "./helpers/soldProducts.js";
import productStock from "./helpers/productStock.js";
import productsToSell from "./helpers/productsToSell.js";
import tvNameToString from "./helpers/tvNameToString.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import priceFormatter from "./helpers/priceFormatter.js";

function App() {
    return (
        <main>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>


            <h2> Verkoopoverzicht </h2>

            {/*Wrapper voor de 3 boxen */}
            <div className="salesWrapper">
                <section className="salesOverview sold">
                    <p>Aantal verkochte producten</p>
                    <div>{soldProducts()}</div>
                </section>

                <section className="salesOverview stock">
                    <p>Aantal ingekochte producten</p>
                    <div>{productStock()}</div>
                </section>

                <section className="salesOverview toSell">
                    <p>Aantal te verkopen producten</p>
                    <div>{productsToSell()}</div>
                </section>
            </div>

            <h2>Best verkochte tv</h2>

            <div className="bestsellerWrapper">
                <section className="bestsellerOverview">
                    <img src={bestSellingTv.sourceImg} alt={tvNameToString(bestSellingTv)}/>
                    <div className="bestsellerTv">
                        <p className="tvTitle">{tvNameToString(bestSellingTv)}</p>
                        <p className="tvPrice">{priceFormatter(bestSellingTv)}</p>
                        <p className="tvSize">sizes</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default App
