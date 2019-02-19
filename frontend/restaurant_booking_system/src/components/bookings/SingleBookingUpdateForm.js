import React from "react";
import moment from "moment";

const SingleBookingUpdateForm = (props) => {
  if(!props.booking) return null

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "id": props.booking.id,

      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "date": event.target.date.value,
      "numberOfCovers": event.target.numberOfCovers.value,
      "tableNumber": event.target.tableNumber.value,
      "receipt": event.target.receipt.value
    }
    props.handleBookingUpdate(booking)
  }

  // const tableOptions = props.restTables.map((restTable) => {
  //   return <option key={restTable.id} value={restTable._links.self.href}>{restTable}
  // })

  const date = props.booking.date
  const dateSorted = date.slice(0,19)
  const formattedDate = moment(dateSorted).format("dddd Do MMM YYYY");
  const time = date.slice(11, 16)
  const valueDate = date.slice(0,16)
  // const id = props.booking.id


  const dateOptions = props.bookings.map((booking) => {
    return (
      <option key={booking.id} value={booking._links.self.href}>{formattedDate} {time}</option>
    )
  })


  return (

    <form className="update-container" onSubmit={handleSubmit}>
    <div>
    <h6>First Name:</h6><input  type="text" placeholder="First Name" name="firstName" defaultValue={props.booking.customer.firstName}/>
    <h6>Last Name:</h6><input type="text" placeholder="Last Name" name="lastName" defaultValue={props.booking.customer.lastName}/>
    </div>
    <div>
    <h6>Existing Booking:</h6><p  type="text" placeholder="nodate" name = "nodate">
    {formattedDate}
    </p>
    </div>
    <div>
    <h6>Revised Booking:</h6><input className="m-4 border rounded" type="datetime-local" placeholder="datetime-local" placeholder="date" name = "date" value={valueDate} required/>
    </div>
    <div>
    <h6>Number of Covers:</h6><input type="number" placeholder="numberOfCovers" name="numberOfCovers" defaultValue={props.booking.numberOfCovers}/>
    </div>
    <div>
    <h6>Table Number:</h6><input type="number" placeholder="tableNumber" name="tableNumber" defaultValue={props.booking.restTable.tableNumber}/>
    </div>
    <div>
    <h6>Receipts:</h6><input type = "number" placeholder = "receipt" name = "receipt" defaultValue = {props.booking.receipt}/>

    <button className="btn btn-info"type="submit">Save</button>
    </div>
    </form>

  )


}
export default SingleBookingUpdateForm;
