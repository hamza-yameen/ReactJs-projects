import React from "react";
import Hero from "./OtherComponnets/Hero";
import Banner from "./OtherComponnets/Banners";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <Hero>
        <Banner title="404" subtitle="Page Not Found">
          <Link to="/" className="btn bannner-button">
            Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
