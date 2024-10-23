import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentfull";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: "all",
      capacity: 1,
      price: 0,
      minprice: 0,
      maxprice: 0,
      minsize: 0,
      maxsize: 0,
      breakfast: false,
      pets: false,
    };
  }

  //get Data
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortHotel",
        order: "fields.price",
      });

      const rooms = this.formatData(response.items);

      const featuredRooms = rooms.filter((room) => room.featured === true);
      let maxprice = Math.max(...rooms.map((item) => item.price));
      let maxsize = Math.max(...rooms.map((item) => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxprice,
        maxprice,
        maxsize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((img) => img.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    const room = tempRoom.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
  };

  filterRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minsize,
      maxsize,
      breakfast,
      pets,
    } = this.state;
    //All Rooms
    let temprooms = [...rooms];

    //Transform Capacity
    capacity = parseInt(capacity);

    //Transform Price
    price = parseInt(price);

    //Filter according to type
    if (type !== "all") {
      temprooms = temprooms.filter((room) => room.type === type);
    }

    //Filter according to Capacity
    if (capacity !== 1) {
      temprooms = temprooms.filter((room) => room.capacity >= capacity);
    }

    //Filter according to price
    temprooms = temprooms.filter((room) => room.price <= price);

    //Filter according to size
    temprooms = temprooms.filter(
      (room) => room.size <= maxsize && room.size >= minsize
    );

    //Filter according to breakfast
    if (breakfast) {
      temprooms = temprooms.filter((room) => room.breakfast === true);
    }

    //Filter according to pets
    if (pets) {
      temprooms = temprooms.filter((room) => room.pets === true);
    }

    this.setState({
      sortedRooms: temprooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function WithRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value}></Component>}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
