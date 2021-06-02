import React from "react";
import Hotel from "./Hotel.js";

/* callback function
 - renders a single hotel
 - assigns a unique key prop to each Hotel component
 - passes the hotel argument to each Hotel component as a prop called "hotel"
 */
const renderHotel = (hotel) => 
    <Hotel key={hotel.id} hotel={hotel} />;

/* functional component
    - accepts 'Hotels' data model as a prop
    - maps over the array of hotel data, calling the
      'renderHotel' callback function to render a 'Hotel'
      component for each item in the array
*/

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }
  const hotelListElements = props.hotels.map(renderHotel);

  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
