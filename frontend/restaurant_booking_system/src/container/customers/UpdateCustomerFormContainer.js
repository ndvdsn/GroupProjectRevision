import React, {Component} from 'react';
import Request from '../../helpers/request.js';

import UpdateCustomerForm from '../../components/customers/UpdateCustomerForm';

class UpdateCustomerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
    this.handleCustomerUpdate = this.handleCustomerUpdate.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    // other bingdings?
  }

  componentDidMount() {
    this.getCustomer();
  }


  getCustomer() {
    let request = new Request()
    const url = '/api/customers/' + this.props.id + '?projection=embedInfoInCustomer'
    request.get(url).then(data => {
      console.log(data);
      this.setState({customer: data});
    })
  }

  handleCustomerUpdate(customer){
    const url = '/api/customers/' + customer.id;
    let request = new Request();
    request.put(url,customer).then(data => {
      window.location = '/customers'
    })
  }

  render(){
    return (
      <div>
      <h1> Update Customer </h1>
      <UpdateCustomerForm
        customer={this.state.customer}
        handleCustomerUpdate={this.handleCustomerUpdate}
        />
        </div>
    )
  }

}

export default UpdateCustomerFormContainer;
