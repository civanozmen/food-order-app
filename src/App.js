import { useState } from "react";

import TopBar from "./components/TopBar";
import FoodList from "./components/FoodList";
import Basket from "./components/Basket";

export default function App() {
  const [basket, setBasket] = useState([]);
  const [basketToggle, basketSetToggle] = useState(false);

  return (
    <>
      <TopBar basket={basket} basketToggle={basketToggle} basketSetToggle={basketSetToggle} />
      <FoodList basket={basket} setBasket={setBasket} />
      <Basket basket={basket} setBasket={setBasket} basketToggle={basketToggle} basketSetToggle={basketSetToggle} />
    </>
  );
}