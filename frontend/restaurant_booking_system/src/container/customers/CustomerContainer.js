import React from "react";
import CustomerList from "../../components/customers/CustomerList";
import Request from "../../helpers/request";
import CustomerFilterNameForm from "../../components/customers/CustomerFilterNameForm";

class CustomerContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customers:[],
      filteredCustomers:[]
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('api/customers').then(data => {
      const customerList = data._embedded.customers;

      let sortedCustomers = customerList.sort(function(a,b){
        const aVisits = a.bookings.length;
        const bVisits = b.bookings.length;

        return bVisits-aVisits;
      })

      this.setState({customers:sortedCustomers})
      this.setState({filteredCustomers:sortedCustomers})
    })
  }

  handleSearch(search){
    const filteredCustomers = this.state.customers.filter((customer) => {
      return customer.lastName.includes(search)
    })
    this.setState({filteredCustomers:filteredCustomers})
  }


  render(){
    return(
      <div className = "customer-container">
        <h1> Customers </h1>
        <CustomerFilterNameForm handleSearch = {this.handleSearch}/>
        <h3>Ordered by frequency of visits</h3>
        <CustomerList customers = {this.state.filteredCustomers}/>
      </div>
    )
  }
}

export default CustomerContainer;
