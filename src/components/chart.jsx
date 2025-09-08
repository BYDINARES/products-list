import AddToCartIcon from "../icons/icon-add-to-cart.svg";

export default function Chart(props) {
  return (
    <section className="dessert" id={props.key}>
      <img src={props.img} alt={`The image of a ${props.name}`} />

      {/* <button>
        <img src={AddToCartIcon} />
        Add to Cart
      </button> */}
      {/*I need to replace this for an button input*/}
      <small>{props.category}</small>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </section>
  );
}
