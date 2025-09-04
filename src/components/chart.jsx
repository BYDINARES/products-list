export default function Chart(props) {
  return (
    <section id={props.key}>
      <img src={props.img} alt={`The image of a ${props.name}`} />
      <h3>{props.category}</h3>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
    </section>
  );
}
