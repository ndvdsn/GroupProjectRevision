import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import BookingContainer from "./container/bookings/bookingContainer";
import NavBar from "./NavBar";
import SingleBookingContainer from "./container/bookings/SingleBookingContainer";
import BookingFormContainer from "./container/bookings/BookingFormContainer";
import SingleBookingUpdateContainer from "./container/bookings/SingleBookingUpdateContainer";
// import SingleBookingUpdateForm from "./"
import CustomerFormContainer from "./container/customers/CustomerFormContainer";
import CustomerContainer from "./container/customers/CustomerContainer";
import TableContainer from "./container/tables/TableContainer";
import SingleCustomerContainer from "./container/customers/SingleCustomerContainer";
import UpdateCustomerFormContainer from "./container/customers/UpdateCustomerFormContainer";
import TableFormContainer from "./container/tables/TableFormContainer";
import TodayBookingContainer from "./container/bookings/TodayBookingContainer";

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <React.Fragment>
          <h4> Restaurant </h4>
            <NavBar/>
            <Switch>
              <Route exact path = "/today" component = {TodayBookingContainer}/>
            <Route exact path="/customers" component = {CustomerContainer}/>
            <Route exact path="/bookings" component = {BookingContainer}/>
            <Route exact path="/restTables" component = {TableContainer}/>
            <Route exact path="/bookings/new" component = {BookingFormContainer}/>
            <Route exact path="/bookings/:id" render={(props) => {
              const id = props.match.params.id
              return<SingleBookingContainer id={id}/>
            }}/>
            <Route exact path="/bookings/update/:id" render={(props) => {
              const id = props.match.params.id
              return<SingleBookingUpdateContainer id={id}/>
            }}/>
            <Route exact path="/customers/new" component = {CustomerFormContainer}/>
            <Route exact path="/customers/:id" render={(props) => {
              const id = props.match.params.id
              return<SingleCustomerContainer id={id}/>
            }}/>
            <Route exact path="/customers/update/:id" render={(props) => {
              const id = props.match.params.id
              return <UpdateCustomerFormContainer id={id} />
            }} />
            <Route exact path="/restTables/new" component = {TableFormContainer}/>




          </Switch>
          </React.Fragment>
        </Router>
      </div>

    )
  }
}

export default App;
