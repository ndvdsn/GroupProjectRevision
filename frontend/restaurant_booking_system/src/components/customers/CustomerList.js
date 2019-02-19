import React from "react";
import Customer from "./Customer";

const CustomerList = (props) => {

    const customers = props.customers.map((customer) => {
      return(
        <li key= {customer.id} className = "customer-item">
          <Customer customer = {customer} />
        </li>
      )
    })

    return(
      <ul>
        {customers}
      </ul>
    )
}

export default CustomerList;
