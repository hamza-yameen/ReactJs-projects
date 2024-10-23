import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../Context";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxprice,
    minprice,
    maxsize,
    minsize,
    breakfast,
    pets,
  } = context;

  //Get Unique Types
  let types = getUnique(rooms, "type");
  //Add All in Types
  types = ["All", ...types];
  //Map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //Get Capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="container">
      <div className="section-title">
        <h4>Room Filtering</h4>
      </div>
      <form>
        <div className="row form-filter">
          {/* Select Type */}
          <div className="col-lg-2 form-item">
            <div className="form-group">
              <label className="label" htmlFor="type">
                Room Type
              </label>
              <select
                name="type"
                id="type"
                value={type}
                className="form-control"
                onChange={handleChange}
              >
                {types}
              </select>
            </div>
          </div>
          {/* End Select Type */}

          {/* Select Capacity */}
          <div className="col-lg-2 form-item">
            <div className="form-group">
              <label className="label" htmlFor="capacity">
                Guests
              </label>
              <select
                name="capacity"
                id="capacity"
                value={capacity}
                className="form-control"
                onChange={handleChange}
              >
                {people}
              </select>
            </div>
          </div>
          {/* End Select Capacity */}

          {/* Select Room Price */}
          <div className="col-lg-3 form-item">
            <div className="form-group">
              <label className="label" htmlFor="price">
                Room Price ${price}
              </label>
              <input
                type="range"
                name="price"
                min={minprice}
                max={maxprice}
                id="price"
                value={price}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          {/* End Select Room Price */}

          {/* Select Room Size */}
          <div className="col-lg-3 form-item">
            <div className="form-group">
              <label className="label" htmlFor="size">
                Room Size
              </label>
              <div className="input-group">
                <input
                  type="number"
                  name="minsize"
                  id="size"
                  className="form-control"
                  value={minsize}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="maxsize"
                  id="size"
                  className="form-control"
                  value={maxsize}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* End Select Room Size */}

          {/* Extras */}
          <div className="col-lg-2 mt-3 form-item">
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  checked={breakfast}
                  onChange={handleChange}
                ></input>
                <label className="label form-check-label" htmlFor="breakfast">
                  Breakfast
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="pets"
                  id="pets"
                  checked={pets}
                  onChange={handleChange}
                ></input>
                <label className="label form-check-label" htmlFor="pets">
                  Pets
                </label>
              </div>
            </div>
          </div>
          {/* End Extras */}
        </div>
      </form>
    </section>
  );
}
