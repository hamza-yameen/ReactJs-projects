import React from "react";
import Hero from "./OtherComponnets/Hero";
import Banner from "./OtherComponnets/Banners";
import { Link } from "react-router-dom";
import RoomContainer from "./OtherComponnets/RoomContainer";

const Rooms = () => {
  return (
    <>
      <header>
        <Hero hero="roomsHero">
          <Banner title="Return Home">
            <Link to="/" className="btn bannner-button">
              Return Home
            </Link>
          </Banner>
        </Hero>
      </header>
      <section>
        <RoomContainer></RoomContainer>
      </section>
    </>
  );
};

export default Rooms;
