import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div>
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        {rooms.map((item) => {
          return <Room key={item.id} room={item}></Room>;
        })}
      </div>
    </div>
  );
}
