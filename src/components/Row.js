import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const [selected, setSelected] = useState(false);

  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? "selected-row" : " "}
    >
      <th scope="row">{props.item.id}</th>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surName}</td>
      <td>{props.item.email}</td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>{diff}</td>
    </tr>
  );
};

export default Row;
