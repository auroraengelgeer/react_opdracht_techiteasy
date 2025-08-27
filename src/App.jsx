import './App.css';
import totalNumberOfSoldProducts from "./helpers/totalNumberOfSoldProducts.js";
import totalStockProduct from "./helpers/totalStockProduct.js";
import totalProductsToSell from "./helpers/totalProductsToSell.js";

function App() {
  return (
      <main>
        <h1>Tech it easy dashboard</h1>

        <h2> Verkoopoverzicht </h2>

        {/* Wrapper voor de 3 boxen */}
        <div className="salesWrapper">
          <section className="salesOverview sold">
            <p>Aantal verkochte producten</p>
            <div>{totalNumberOfSoldProducts()}</div>
          </section>

          <section className="salesOverview stock">
            <p>Aantal ingekochte producten</p>
            <div>{totalStockProduct()}</div>
          </section>

          <section className="salesOverview toSell">
            <p>Aantal te verkopen producten</p>
            <div>{totalProductsToSell()}</div>
          </section>
        </div>

        <h2>Best verkochte tv</h2>

      </main>
  )
}

export default App
