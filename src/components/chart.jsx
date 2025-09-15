import AddToCartIcon from "../icons/icon-add-to-cart.svg";

export default function Chart(props) {
  return (
    <section className="dessert" id={props.key}>
      <img src={props.img} alt={`The image of a ${props.name}`} />

      {!props.renderButton && (
        <button onClick={props.handleClick} className={props.classButton}>
          <img src={AddToCartIcon} />
          Add to Cart
        </button>
      )}
      {props.renderButton && (
        <button onClick={props.handleClick} className={props.classButton}>
          <img src={AddToCartIcon} />
          new Button
        </button>
      )}

      <small>{props.category}</small>
      <h3>{props.name}</h3>
      <p>${props.price.toFixed(2)}</p>
    </section>
  );
}
