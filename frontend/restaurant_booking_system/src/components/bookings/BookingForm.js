import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "date": event.target.date.value,
      "customer":event.target.customer.value,
      "numberOfCovers": event.target.numberOfCovers.value,
      "restTable": event.target.table.value,
      "receipt":0
    }
    props.handleBookingPost(booking);
  }

  const customerOptions = props.customers.map((customer) => {
    return <option key={customer.id} value={customer._links.self.href}>{customer.firstName} {customer.lastName}</option>
  })

  const tableOptions = props.tables.map((table) => {
    return(
      <option key={table.id} value={table._links.self.href}>{table.tableNumber} (max covers: {table.maxCovers} )</option>
    )
  })

  return(

    <form className="container" onSubmit = {handleSubmit}>
      <label htmlFor="date">Date & Time</label>
      <div className="booking-options">
      <input className="m-4 border rounded" type="datetime-local" placeholder = "date" name = "date" required/>
      <select className="m-4 border rounded" name = "customer">
        {customerOptions}
      </select>
      <input className="m-4 border rounded" type="number" placeholder = "No. of Guests" name = "numberOfCovers" min="0" max="10" required/>
      </div>
      <label htmlFor="table">Table</label>
      <select className="m-4 border rounded" name = "table">

        {tableOptions}
      </select>
      <button className="btn btn-info" type = "submit">Save Booking</button>

    </form>
  )
}

export default BookingForm;
