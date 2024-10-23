import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
//import { RoomConsumer } from "../../Context";
import { WithRoomConsumer } from "../../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { sortedRooms, loading, rooms } = context;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <RoomFilter rooms={rooms}></RoomFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </>
  );
}

export default WithRoomConsumer(RoomContainer);

//function RoomContainer() {
//  return (
//    <RoomConsumer>
//      {(value) => {
//        const { featuredRooms, loading, rooms } = value;
//        if (loading) {
//          return <Loading></Loading>;
//        }
//
//        return (
//          <div>
//            <h2>Hello From Room Container</h2>
//            <RoomFilter rooms={rooms}></RoomFilter>
//            <RoomList rooms={featuredRooms}></RoomList>
//          </div>
//        );
//      }}
//    </RoomConsumer>
//  );
//}

//export default RoomContainer;
