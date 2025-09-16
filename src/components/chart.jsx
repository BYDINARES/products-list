import AddToCartIcon from "../icons/icon-add-to-cart.svg";
import incrementIcon from "../icons/icon-increment-quantity.svg";
import decrementIcon from "../icons/icon-decrement-quantity.svg";

export default function Chart(props) {
  return (
    <section className="dessert" id={props.key}>
      <img src={props.img} alt={`The image of a ${props.name}`} />

      {!props.renderButton && (
        <button onClick={props.handleClick}>
          <img src={AddToCartIcon} />
          Add to Cart
        </button>
      )}
      {props.renderButton && (
        <div onClick={props.handleClick} className="increase-deacrease-button">
          <button>
            <img src={incrementIcon} alt="A '+'" />
          </button>
          {props.quantity}
          <button>
            <img src={decrementIcon} alt="A '-'" />
          </button>
        </div>
      )}

      <small>{props.category}</small>
      <h3>{props.name}</h3>
      <p>${props.price.toFixed(2)}</p>
    </section>
  );
}
