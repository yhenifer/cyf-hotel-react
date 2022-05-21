import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  //useEffect(() => {
  //fetch(API_URL)
  //.then(data => data.json())
  //.then(json => setBookings(json));

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults result={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
