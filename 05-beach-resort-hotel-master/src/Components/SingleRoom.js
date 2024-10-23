import React, { Component } from "react";
import defaultImage from "../images/defaultBcg.jpeg";
import Banner from "./OtherComponnets/Banners";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyleHero from "./OtherComponnets/StyleHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImage,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error-section">
          <h6>No Such Room Could be Found....</h6>
          <Link to="/rooms" className="error-link">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImage, ...OtherImages] = images;
    return (
      <div className="container-fluid">
        <StyleHero img={mainImage || this.state.defaultImage}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn bannner-button">
              Back to Room
            </Link>
          </Banner>
        </StyleHero>

        <div className="row singleRoom-imgRow">
          {OtherImages.map((img, index) => {
            return (
              <div className="col-sm-4 singleRoom-imgBlock">
                <img
                  className="img-fluid"
                  key={index}
                  src={img}
                  alt={name}
                ></img>
              </div>
            );
          })}
        </div>

        <div className="row Single-Room-Info">
          <div className="col-md-8 col-sm-6 desc">
            <h3>Details</h3>
            <p>{description}</p>
          </div>
          <div className="col-md-4 col-sm-6 info">
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>
              Max Capacity :{" "}
              {capacity > 1 ? `${capacity} Prople` : `${capacity} Person`}
            </h6>
            <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
            <h6>{breakfast && "Free Breakfast Included"}</h6>
          </div>
        </div>

        <div className="extras">
          <h3>Extras</h3>

          <ul className="extras-items mt-4">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
