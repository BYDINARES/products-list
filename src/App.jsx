import { useState, useEffect } from "react";
import "./App.css";
import Chart from "./components/chart";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json)) // save to state
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  /* const arrayOfCharts = data.map((chart) => (
    <Chart
      key={chart.name}
      img={chart.image.thumbnail}
      name={chart.name}
      price={chart.price}
      category={chart.category}
    />
  )); */

  return (
    <>
      <header>Desserts</header>
      {data && <section>{arrayOfCharts}</section>}
      <aside></aside>
    </>
  );
}

export default App;
