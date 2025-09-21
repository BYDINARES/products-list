import { useState } from "react";
import "./app.css";
import Chart from "./components/chart";
import data from "./data/data.json";
//Imported icons
import ilustrationEmptyCart from "./icons/illustration-empty-cart.svg";
import removeIcon from "./icons/icon-remove-item.svg";
import greenTree from "./icons/icon-carbon-neutral.svg";
import confirmOrder from "./icons/icon-order-confirmed.svg";

function App() {
  const [derivedData] = useState(
    data.map((item) => ({ ...item, quantity: 0 }))
  );

  const [shopItems, setShopItems] = useState([]);

  // Store the item data in the cart
  /*  const addToCart = (newItem) => {
    setShopItems((prevShopItems) => {
      const existingItem = prevShopItems.find(
        (item) => item.name === newItem.name
      );                                        <=== THE APP DOESN'T CURRENLTY
                                                     WORK. SEE IF YOU CAN REMOVE THIS BECUASE YOU CREATED ANOTHER FUNCTION. 
    });
  }; */

  const decreaseTheNumberOfItems = (clickedItem) => {
    console.log("Decrease!!!");
    setShopItems((prevShopItems) => {
      const existingItem = prevShopItems.find(
        (item) => item.name === clickedItem
      );

      //Return if there's no item in the "shopItems" array named like "clikedItem"
      if (!existingItem) return prevShopItems;

      /* if (existingItem.quantity === 1) {
        // remove if quantity would go to 0
        return prevShopItems.filter((item) => item.name !== clickedItem.name);
      } */

      // otherwise decrease
      return prevShopItems.map((item) =>
        item.name === clickedItem
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  //I need to pass the name of the chart being clicked as the clickedItem
  const increaseTheNumberOfItems = (clickedItem) => {
    setShopItems((prevShopItems) => {
      const itemExists = prevShopItems.find(
        (item) => item.name === clickedItem
      );

      // I NEED TO CODE SOMETHING IN CASE THE DECREASE REACHES 0 WITH THIS SPECIFIC BUTTON
      /* if (clickedItem.quantity - 1 === 0){
        return 
      } */

      if (itemExists) {
        // If item already exists, increment quantity
        return prevShopItems.map((item) =>
          item.name === clickedItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add with quantity 1
        return [...prevShopItems, { ...clickedItem, quantity: 1 }];
      }
    });
  };

  // ============ ARRAY OF COMPONENTS (CHARTS) ===========
  const arrayOfCharts = derivedData.map((chart, index) => {
    // Look for this chart in the cart
    const shopItem = shopItems.find((item) => item.name === chart.name);

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
            img: chart.image,
          })
        }
        handleClickIncrease={() => increaseTheNumberOfItems(chart.name)}
        handleClickDecrease={() => decreaseTheNumberOfItems(chart.name)}
        renderButton={!!shopItem}
        quantity={shopItem ? shopItem.quantity : 0}
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

  const [wasConfirmButtonClicked, setWasConfirmButtonClicked] = useState(false);

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

              <button
                id="confirm-order-button"
                onClick={() => setWasConfirmButtonClicked(true)}
              >
                Confirm order
              </button>
            </div>
          )}
        </aside>

        {/* Dialog that gets displayed after the confirm button was clicked */}
        {wasConfirmButtonClicked && (
          <dialog open>
            <img src={confirmOrder} alt="A check sign" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <div>
              {shopItems.map((item, i) => (
                <section key={i}>
                  <img src={item.img} alt="The image of the dish" />
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
            </div>
          </dialog>
        )}
      </main>
    </>
  );
}

export default App;
