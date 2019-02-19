import React from "react";
import BookingList from "../../components/bookings/BookingList";
import Request from "../../helpers/request";
import BookingFilterForm from "../../components/bookings/BookingFilterForm";

class BookingContainer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    bookings:[]
  }
  this.handleDateChange = this.handleDateChange.bind(this);
}

componentDidMount(){
  const request = new Request();
  request.get('/api/bookings').then(data => {
    const bookingList = data._embedded.bookings;
    let sortedBookings = bookingList.sort(function(a,b){
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate-bDate;
    })
    this.setState({bookings:sortedBookings})
  })
}

handleDateChange(date){
  const filteredBookings = this.state.bookings.filter((booking) => {
    return booking.date.includes(date)
  })
  let sortedBookings = filteredBookings.sort(function(a,b){
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return aDate-bDate;
  })
  this.setState({bookings:sortedBookings})
}

  render(){
    return(

      <div className = "booking-container">
      <h1> Bookings </h1>
      <BookingFilterForm handleDateChange = {this.handleDateChange}/>
      <BookingList bookings = {this.state.bookings}/>
    </div>

    )
  }
}

export default BookingContainer;
