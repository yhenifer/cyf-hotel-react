import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const [Orders, setOrders] = useState(0);
  function OrderOne() {
    setOrders(Order + 1);
  }
  return (
    <div className="restaurat-style">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {Orders}{" "}
          <button
            className="btn btn-primary"
            onClick={() => {
              setOrders(Orders + 1);
            }}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
