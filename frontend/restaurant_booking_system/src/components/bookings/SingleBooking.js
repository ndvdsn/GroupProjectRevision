import React from "react";
import { Link } from "react-router-dom"
import moment from "moment";

const SingleBooking = (props) => {


  if(!props.booking){
    return null;
  }


  function onDelete(){
    props.handleDelete(props.booking.id)
  }

  const date =  props.booking.date
  const dateSorted = date.slice(0,10)
  const formattedDate = moment(dateSorted).format("dddd Do MMM YYYY");

  const time = date.slice(11, 16)
  const id = props.booking.id



  return (
    <div className="component">
    <p> Date : {formattedDate}</p>
    <p> Time : {time}</p>
    <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
    <p>Number of Guests: {props.booking.numberOfCovers}</p>
    <p> Table: {props.booking.restTable.tableNumber}</p>
<div className="btns">
    <Link to={'/bookings/update/' +id}
    className="single-booking-update"><button className="btn btn-info m-2">Update</button>
    </Link>
    <button className="btn btn-danger btn-sm w-2"onClick={onDelete}>Delete Booking</button>
    </div>
    </div>
  )
}

export default SingleBooking;
