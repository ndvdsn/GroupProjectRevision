import React from "react";
import Request from "../../helpers/request";
import SingleBookingUpdateForm from "../../components/bookings/SingleBookingUpdateForm";

class SingleBookingUpdateContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      bookings:[],
      customers:[],
      tables:[],
      booking: null
    }
    this.handleBookingUpdate = this.handleBookingUpdate.bind(this)
    this.getBookings = this.getBookings.bind(this)
    this.getCustomers = this.getCustomers.bind(this)
    this.getRestTables = this.getRestTables.bind(this)
    this.getBooking = this.getBooking.bind(this)
  }

  componentDidMount(){
    this.getBookings()
    this.getCustomers()
    this.getRestTables()
    this.getBooking()
  }

  getBooking(){
    let request = new Request()
    const url = '/api/bookings/' + this.props.id + '?projection=embedInfoInBooking'
    request.get(url).then(data => {
      this.setState({booking: data})
    })
  }

  getBookings(){
    const request = new Request();
    request.get('/api/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  getCustomers(){
    const request = new Request();
    request.get('/api/customers/').then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  getRestTables(){
    const request = new Request();
    request.get('/api/restTables/').then((data) => {
      this.setState({restTables: data._embedded.restTables})
    })
  }

  handleBookingUpdate(booking){
    const url = '/api/bookings/' + booking.id;
    let request = new Request();
    request.put(url, booking).then(data => {
      window.location = '/bookings'
    })


  }

  render(){
    return(
      <div className="booking-container">
      <h1> Update Booking </h1>
      <SingleBookingUpdateForm
      booking={this.state.booking}
      customers = {this.state.customers}
      restTables = {this.state.restTables}
      bookings = {this.state.bookings}
      handleBookingUpdate = {this.handleBookingUpdate}

      />
      </div>
    )
  }
}
export default SingleBookingUpdateContainer;
