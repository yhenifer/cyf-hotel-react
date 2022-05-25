import { format } from "date-fns";
import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import Row from "./Row";

const SearchResults = props => {
  /*const [selected, setSelected] = useState(false);*/
  const [idCliente, setIdCliente] = useState();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(data => {
            const date1 = moment(data.checkInDate);
            const date2 = moment(data.checkOutDate);
            const diff = date2.diff(date1, "days");
            return <Row data={data} diff={diff} setIdCliente={setIdCliente} />;

            /* return (
            <tr
              onClick={() => setSelected(!selected)}
              className={selected ? "selected-row" : " "}
            >
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surName}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>{diff}</td>
            </tr>
          );
*/
          })}
        </tbody>
      </table>
      <CustomerProfile id={idCliente} />
    </div>
  );
};

export default SearchResults;
