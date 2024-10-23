import React, { Component } from "react";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail></FaCocktail>,
          title: "Free Cocktail",
          des:
            "Learn React by building a beach resort website project. The project uses React router for routing, React context API for state management",
        },
        {
          icon: <FaHiking></FaHiking>,
          title: "Endless Hiking",
          des:
            "Learn React by building a beach resort website project. The project uses React router for routing, React context API for state management",
        },
        {
          icon: <FaShuttleVan></FaShuttleVan>,
          title: "Free ShuttleVan",
          des:
            "Learn React by building a beach resort website project. The project uses React router for routing, React context API for state management",
        },
        {
          icon: <FaBeer></FaBeer>,
          title: "Strongest   Hiking",
          des:
            "Learn React by building a beach resort website project. The project uses React router for routing, React context API for state management",
        },
      ],
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }
  render() {
    return (
      <div className="container">
        <Title title="Services"></Title>
        <div className="row">
          {this.state.services.map((item, index) => {
            return (
              <div className="col-lg-3 col-sm-6">
                <div
                  key={index}
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">{item.icon}</div>
                  <h4 className="title">{item.title}</h4>
                  <p className="description">{item.des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
