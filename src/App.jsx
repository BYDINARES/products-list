import { useState } from "react";
import "./app.css";
import Chart from "./components/chart";
import data from "./data/data.json";
//Imported icons
import ilustrationEmptyCart from "./icons/illustration-empty-cart.svg";
import removeIcon from "./icons/icon-remove-item.svg";
import greenTree from "./icons/icon-carbon-neutral.svg";

function App() {
  const [derivedData] = useState(
    data.map((item) => ({ ...item, quantity: 0 }))
  );

  const [shopItems, setShopItems] = useState([]);

  // Store the item data in the cart
  const addToCart = (newItem) => {
    setShopItems((prevShopItems) => {
      const existingItem = prevShopItems.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        // If item already exists, increment quantity
        return prevShopItems.map((item) =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add with quantity 1
        return [...prevShopItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  /*   const addAnotherToTheCart = (newItem) => {
    shopItems.find((item) => item.name === newItem.name);
  }; */

  const arrayOfCharts = derivedData.map((chart, index) => {
    const isInCart = shopItems.find((item) => item.name === chart.name);

    return (
      <Chart
        key={index}
        img={chart.image.mobile}
        name={chart.name}
        price={chart.price}
        category={chart.category}
        handleClick={() =>
          addToCart({
            id: index,
            name: chart.name,
            price: chart.price,
            category: chart.category,
            quantity: chart.quantity,
          })
        }
        renderButton={isInCart}
        quantity={chart.quantity}
      />
    );
  });

  console.log(arrayOfCharts);
  //Calculate total items to buy
  const totalNumberOfItems = shopItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Calculate total price
  const totalPrice = shopItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <header>
        <h1>Desserts</h1>
      </header>
      <main>
        {arrayOfCharts}
        {/* This is the cart */}
        <aside className="shopping-cart">
          <h1>Your Cart {totalNumberOfItems}</h1>

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
                    <li className="number-reapeated-products">
                      {item.quantity}x
                    </li>
                    <li>@${item.price.toFixed(2)}</li>
                    <li>${(item.quantity * item.price).toFixed(2)}</li>
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

              <div className="green-warning">
                <img src={greenTree} alt="the siluette of a green tree" />
                <p>
                  This is a <a>carbon-neutral</a> delivery
                </p>
              </div>

              <button id="confirm-order-button">Confirm order</button>
            </div>
          )}
        </aside>
      </main>
    </>
  );
}

export default App;
