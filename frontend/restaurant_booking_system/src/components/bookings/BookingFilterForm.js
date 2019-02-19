import React from "react";

const BookingFilterForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const date = event.target.date.value;
    console.log(date);
    props.handleDateChange(date);
  }

  return(
    // <p>Filter by Date</p>
    <form className="filter-search" onSubmit = {handleSubmit} >
    <input type="date" name="date"/>
      <input className="btn" type = "submit" value = "Submit"/>
    </form>
  )
}
export default BookingFilterForm
