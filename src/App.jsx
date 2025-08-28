import './App.css';
import soldProducts from "./helpers/soldProducts.js";
import productStock from "./helpers/productStock.js";
import productsToSell from "./helpers/productsToSell.js";

function App() {
    return (
        <main>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>

            <body>

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

            </body>
        </main>
    )
}

export default App
