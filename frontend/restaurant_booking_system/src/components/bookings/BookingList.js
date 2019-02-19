import React from "react";
import Booking from "./Booking";

const BookingList = (props) => {

  const bookings = props.bookings.map((booking) => {
    return(

      <li key = {booking.id} className = "booking-item">
        <Booking booking = {booking}/>
      </li>

    )
  })

  return(
    <ul>
    {bookings}
  </ul>
  )
}


export default BookingList;
