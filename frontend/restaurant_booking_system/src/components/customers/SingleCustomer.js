import React from "react";
import { Link } from 'react-router-dom';
import Booking from '../bookings/Booking';

const SingleCustomer = (props) => {

  if(!props.customer){
    return null;
  }

  function onDelete() {
    props.handleDelete(props.customer.id)
  }

// conflicting version:
// chose version on one line per booking below, merging same of this info including receipt

// const bookings = props.customer._embedded.bookings.map((booking) => {
//   const date = booking.date.slice(0,10);
//   const time = booking.date.slice(11,16);
//   return(
//     <li>
//       <Link to = {"/bookings/" +booking.id}>
//       <p>Date: {date}</p>
//       </Link>
//       <p>Time: {time}</p>
//       <p>Number of Guests: {booking.numberOfCovers}</p>
//       <p>Receipt: {booking.receipt}</p>
//     </li>
//
//   )
// })


console.log(props.customer.bookings);

  const id = props.customer.id;
  const firstName = props.customer.firstName;
  const lastName = props.customer.lastName;
  const email = props.customer.email;
  const contactNumber = props.customer.contactNumber;

// /api/customers/1/bookings

    var booking_dates = null;

    if(!props.customer._embedded){
      booking_dates = "no bookings yet!";
    }else{
      booking_dates = props.customer._embedded.bookings.map((booking) => {
        return(
          <li key= {booking.id} className = "customer-booking">
          <div>
          <div className="single-customer-booking-display">
              {booking.id}:
              </div> {booking.date.slice(0,10)} at {booking.date.slice(14,19)}
              <div>for {booking.numberOfCovers} people,</div> receipt £{booking.receipt}
              </div>
               <Link to={'/bookings/update/' + booking.id}><button className="btn-sm btn-warning"> update booking </button></Link>
          </li>
        )
      })
    }



  return(
    <div className="component">
      <p>Customer: {props.customer.firstName} {props.customer.lastName}</p>
      <p> Bookings: </p>
      <ul>
        {booking_dates}
      </ul>

      <Link to={'/customers/update/' + props.customer.id}>
        <button className="btn m-2 btn-info">update customer</button>
      </Link>

      <button id="delete-button"className="btn btn-danger btn-sm"onClick={onDelete}>delete customer</button>
    </div>
  )


}

export default SingleCustomer;
