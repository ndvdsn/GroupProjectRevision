import React from "react";
import { Link } from "react-router-dom"
import moment from "moment";

const Booking = (props) => {


const date =  props.booking.date
const dateSorted = date.slice(0,10)

const formattedDate = moment(dateSorted).format("dddd Do MMM YYYY");

const time = date.slice(11, 16)
const id = props.booking.id

  return(
    <div className = "single-booking-container">
    <Link to={'/bookings/' +id}
    className="single-booking">

    <div className="booking-inner">
      <p> Date : {formattedDate}</p>
      <p> Time : {time}</p>
      <div className="name">
      <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
      </div>
      <p>Number of Guests: {props.booking.numberOfCovers}</p>
      <p> Table: {props.booking.restTable.tableNumber}</p>
    </div>
    </Link>
    </div>
  )
}

export default Booking;
