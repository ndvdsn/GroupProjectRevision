import React from "react";
import Request from "../../helpers/request";
import CustomerForm from "../../components/customers/CustomerForm";

class CustomerFormContainer extends React.Component{

  constructor(props){
    super(props);
    // bindings?
    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  }

  componentDidMount(){
    // can we leave this out?
  }

  handleCustomerPost(customer){
    console.log(customer);
    const request = new Request();
    request.post('/api/customers', customer).then(() => {
      window.location='/customers'
    })
  }

  render(){
    return(
      <div className = "customer-container">
        <h1> Create New Customer </h1>
      <CustomerForm handleCustomerPost = {this.handleCustomerPost}/>
      </div>
    )
  }

}

export default CustomerFormContainer;
