import { useEffect, useRef, useState } from "react";
import "./app.css";
import Chart from "./components/chart";
import data from "./data/data.json";
import ilustrationEmptyCart from "./icons/illustration-empty-cart.svg";
import removeIcon from "./icons/icon-remove-item.svg";

function App() {
  const [shopItems, setShopItems] = useState([]);

  // Store the item data in the cart
  const addToCart = (newItem) => {
    setShopItems((prevShopItems) => [...prevShopItems, newItem]);
    console.log(shopItems);
  };

  const counter = useRef(0);

  const addAnotherToTheCart = (newItem) => {
    shopItems.find((item) => item.name === newItem.name);
  };

  // Pass the correct data down into Chart
  const arrayOfCharts = data.map((chart, index) => (
    <Chart
      key={index}
      img={chart.image.mobile}
      name={chart.name}
      price={chart.price}
      category={chart.category}
      handleClick={() =>
        addToCart({
          id: index, // useful for unique keys
          name: chart.name,
          price: chart.price,
          category: chart.category,
          img: chart.image.thumbnail,
        })
      }
    />
  ));

  // Calculate total price
  const totalPrice = shopItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <header>
        <h1>Desserts</h1>
      </header>
      <main>
        {arrayOfCharts}
        {/* This is the cart */}
        <aside className="shopping-cart">
          <h1>Your Cart ({shopItems.length})</h1>

          {/* If empty */}
          {shopItems.length === 0 && (
            <>
              <img
                className="ilustration-empty-cart"
                src={ilustrationEmptyCart}
                alt="Empty cart"
              />
              <p>Your added items will appear here</p>
            </>
          )}

          {/* This is the length of cart that gets displaid after you have 1 item in the cart */}
          {shopItems.length > 0 && (
            <div className="cart-list">
              {/* The list of items */}
              {shopItems.map((item, i) => (
                <section key={i}>
                  <h3>{item.name}</h3>
                  <ul>
                    <li>@${item.price.toFixed(2)}</li>
                    <li>${item.price.toFixed(2)}</li>
                  </ul>
                  <button>
                    <img src={removeIcon} alt="An X to remove" />
                  </button>
                </section>
              ))}
              {/* Checkout */}
              <div className="total-price">
                <p className="calling-price">Order Total:</p>
                <p className="number-price">${totalPrice.toFixed(2)}</p>
              </div>

              <p>This is a carbon-neutral delivery</p>
              <button>Confirm order</button>
            </div>
          )}
        </aside>
      </main>
    </>
  );
}

export default App;
