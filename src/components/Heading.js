import React from "react";

const Heading = () => {
  const hotelImagen =
    "https://cdn-icons-png.flaticon.com/512/808/808282.png?w=740";
  return (
    <header className=" App-header">
      <img
        src={hotelImagen}
        alt="Hotel logo"
        width={25}
        style={{
          margin: "15px"
        }}
      />
      CYF Hotel
    </header>
  );
};

export default Heading;
