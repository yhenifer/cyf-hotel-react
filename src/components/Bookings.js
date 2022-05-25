import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const API_URL = "https://cyf-react.glitch.me";

  const search = searchVal => {
    const filteresBookings = bookings.filter(
      bookings =>
        bookings.firstName
          .toLocaleLowerCase()
          .includes(searchVal.toLocaleLowerCase()) ||
        bookings.surname
          .toLocaleLowerCase()
          .includes(searchVal.toLocaleLowerCase())
    );
    setBookings(filteresBookings);
  };

  /*useEffect(() => {
  fetch(API_URL)
    .then((data) => data.json())
    .then((json) => {
      setBookings(json);
    });
}, []);*/

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults result={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
