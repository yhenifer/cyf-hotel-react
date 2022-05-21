import React from "react";

const RestaurantButton = props => {
  return (
    <button className="bnt bny-primary" onClick={props.orderFunctionProp}>
      Add
    </button>
  );
};
export default RestaurantButton;
