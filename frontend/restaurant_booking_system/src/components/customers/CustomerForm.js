import React from "react";

const CustomerForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const customer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "email": event.target.email.value,
      "contactNumber": event.target.contactNumber.value
    }
    props.handleCustomerPost(customer);
  }

  return(
    <form className="new-customer"onSubmit = {handleSubmit}>
      <input type="text" placeholder="First Name" name="firstName" required/>
      <input type="text" placeholder = "Last Name" name = "lastName" required/>
      <input type="text" placeholder = "Email" name = "email" required/>
      <input type="text" placeholder = "Contact Number" name = "contactNumber" required/>
      <button className="btn btn-info" type="submit">register</button>

    </form>
  )

}

export default CustomerForm;
