import React from "react";
import Hero from "./OtherComponnets/Hero";
import Banner from "./OtherComponnets/Banners";
import { Link } from "react-router-dom";
import Services from "./OtherComponnets/Services";
import FeaturedRoom from "./OtherComponnets/FeaturedRoom";

export default function Home() {
  return (
    <>
      <header>
        <Hero>
          <Banner
            title="Luxurious Rooms"
            subtitle="Duluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn bannner-button">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
      </header>
      <section className="services mb-5">
        <Services></Services>
      </section>
      <section className="roomssection">
        <FeaturedRoom></FeaturedRoom>
      </section>
    </>
  );
}
