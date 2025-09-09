import { useState, useEffect } from "react";
import "./app.css";
import Chart from "./components/chart";
import data from "./data/data.json";
import ilustrationEmptyCart from "./icons/illustration-empty-cart.svg";

function App() {
  const [shopItems, setShopItems] = useState([]);

  const arrayOfCharts = data.map((chart, index) => (
    <Chart
      key={index}
      img={chart.image.mobile}
      name={chart.name}
      price={chart.price}
      category={chart.category}
      handleClick={() => {}}
    />
  ));

  return (
    <>
      <header>
        <h1>Desserts</h1>
      </header>
      <main>
        {arrayOfCharts}
        <aside className="shopping-cart">
          <h1>Your Cart ({shopItems.length})</h1>
          {/* the array of components derived from the useState */}
          {/* if the code above its true, then render a <p>Order Total ${price}</p> */}
          {/* If the thing above is true (more than 0), then add this text "This is a carbon-neutral delivery" */}
          {shopItems.length == 0 && (
            <img
              className="ilustration-empty-cart"
              src={ilustrationEmptyCart}
            ></img>
          )}

          {shopItems.length == 0 && <p>Your added items will appear here</p>}

          {shopItems.length > 0 && <button>Corfirm order</button>}
        </aside>
      </main>
    </>
  );
}

export default App;
