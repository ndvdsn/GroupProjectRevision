import React from "react";

const Table = (props) => {


  // const booked = props.restTable.bookings.numberOfCovers
  // if(booked > 0) {
  //   "single-table".style.backgroundColor = 'red'
  // } else {
  //   "single-table".style.backgroundColor = 'green'
  // }

  return(
    <div className = "single-table">
    <p>Number: {props.restTable.tableNumber}</p>
    <p>Size: {props.restTable.maxCovers} </p>
    </div>
  )
}

export default Table;
