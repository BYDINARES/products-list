import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chart from "./components/chart";
import data from "./assets/data.json";

function App() {
  const arrayOfCharts = data.map((chart) => (
    <Chart
      key={chart.name}
      img={chart.image.thumbnail}
      name={chart.name}
      price={chart.price}
      category={chart.category}
    />
  ));

  return (
    <>
      <header>Desserts</header>
      <section>{arrayOfCharts}</section>
      <aside></aside>
    </>
  );
}

export default App;
