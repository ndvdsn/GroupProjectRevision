import React from 'react';

const UpdateCustomerForm = (props) => {
  if(!props.customer) return null

  function handleSubmit(event){
    event.preventDefault()
    const customer = {
      "id": props.customer.id,
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "email": event.target.email.value,
      "contactNumber": event.target.contactNumber.value
    }
    props.handleCustomerUpdate(customer)
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="update-container">
      <input type="text" placeholder="first name" name="firstName" defaultValue={props.customer.firstName}/>
      <input type="text" placeholder="last name" name="lastName" defaultValue={props.customer.lastName}/>
      <input type="text" placeholder="email" name="email" defaultValue={props.customer.email}/>
      <input type="text" placeholder="contact number" name="contactNumber" defaultValue={props.customer.contactNumber}/>
      <button className="btn btn-info"type="submit">save</button>
      </div>
    </form>
  )
}

export default UpdateCustomerForm;
