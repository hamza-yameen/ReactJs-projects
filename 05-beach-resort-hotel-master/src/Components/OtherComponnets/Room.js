import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../../images/defaultBcg.jpeg";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <div className="col-md-4 col-sm-6 room-item mb-10">
      <img
        className="img-fluid"
        src={images[0] || defaultImage}
        alt="Single Room"
      ></img>
      <div className="roominfo">
        <h6>{name}</h6>
        <p>
          ${price} <span>Per Night</span>
        </p>
        <Link to={`/rooms/${slug}`} className="roon-link">
          Features
        </Link>
      </div>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
