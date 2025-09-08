import { useState, useEffect } from "react";
import "./app.css";
import Chart from "./components/chart";
import data from "./data/data.json";

function App() {
  const [shopItems, setShopItems] = useState(null);

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
          <h1>Your Cart {/* The number of shop items */}</h1>
          {/* the array of components derived from the useState */}
          {/* if the code above its true, then render a <p>Order Total ${price}</p> */}
          {/* If the thing above is true (more than 0), then add this text "This is a carbon-neutral delivery" */}
          <button>Corfirm order</button>
        </aside>
      </main>
    </>
  );
}

export default App;
