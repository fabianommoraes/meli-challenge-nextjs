import { getExampleClientSide } from "../../services/items";
import { useState } from "react";

const Example = () => {
  const [cost, setCost] = useState("");

  const getInfo = async () => {
    const response = await getExampleClientSide();
    setCost(response);
  };

  return (
    <div>
      Frete: {cost} <button onClick={getInfo}>Calcular</button>
    </div>
  );
};

export default Example;
