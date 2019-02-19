import React from "react";

const BookingFilterForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const date = event.target.date.value;
    console.log(date);
    props.handleDateChange(date);
  }

  return(
    <form className="filter-search" onSubmit = {handleSubmit} >
      <input type="date" name="date"/>
      <input className="btn" type = "submit" value = "Filter By Date"/>
    </form>
  )
}
export default BookingFilterForm
