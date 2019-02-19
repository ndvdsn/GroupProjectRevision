import React from "react";
import BookingList from "../../components/bookings/BookingList";
import Request from "../../helpers/request";
import BookingFilterForm from "../../components/bookings/BookingFilterForm";

class TodayBookingContainer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    bookings:[]
  }
  this.handleDateChange = this.handleDateChange.bind(this);
}

componentDidMount(){
  // today's date:
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0'+dd
  }
  if(mm<10) {
      mm = '0'+mm
  }
  // make sure this date format matches the api date format:
  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  const request = new Request();
  request.get('/api/bookings').then(data => {
    const bookingList = data._embedded.bookings;
    let sortedBookings = bookingList.sort(function(a,b){
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      console.log(a.date);
      return aDate-bDate;
    })

    this.setState({bookings:sortedBookings})
    this.handleDateChange(today);
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
      <h1> Today's Bookings </h1>
      <BookingList bookings = {this.state.bookings}/>
    </div>

    )
  }
}

export default TodayBookingContainer;
