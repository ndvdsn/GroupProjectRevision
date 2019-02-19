import React, {Component} from "react";
import SingleCustomer from "../../components/customers/SingleCustomer";
import Request from '../../helpers/request';

class SingleCustomerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customer: null
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  
// + '?projection=embedInfoInCustomer'

  componentDidMount() {
    let request = new Request()
    const url = "/api/customers/" + this.props.id
    request.get(url).then(data => {
      this.setState({customer: data})
    })
  }

  handleDelete(id) {
    const url = "/api/customers/" + id;
    let request = new Request()
    request.delete(url).then(() => {
      window.location = "/customers"
    })
  }

  render(){
    return (
      <SingleCustomer customer={this.state.customer} handleDelete={this.handleDelete}/>
    )
  }
}

export default SingleCustomerContainer;
