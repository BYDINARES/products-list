import { useState, useEffect } from "react";
import "./App.css";
import Chart from "./components/chart";
import data from "./data/data.json";

function App() {
  const [shopItems, setShopItems] = useState(null);

  const arrayOfCharts = data.map((chart, index) => (
    <Chart
      key={index}
      img={chart.image.thumbnail}
      name={chart.name}
      price={chart.price}
      category={chart.category}
      handleClick={() => {}}
    />
  ));

  return (
    <>
      <header>Desserts</header>
      {arrayOfCharts}
      <aside className="shopping-cart">
        <h1>Your Cart {/* The number of shop items */}</h1>
        {/* the array of components derived from the useState */}
        {/* if the code above its true, then render a <p>Order Total ${price}</p> */}
        {/* If the thing above is true (more than 0), then add this text "This is a carbon-neutral delivery" */}
        <button>Corfirm order</button>
      </aside>
    </>
  );
}

export default App;
