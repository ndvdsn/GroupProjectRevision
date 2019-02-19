import React from "react";

const TableForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const table = {
      "tableNumber": event.target.tableNumber.value,
      "maxCovers": event.target.maxCovers.value
    }
    props.handleTablePost(table);
  }

  return(

    <form className="container" onSubmit = {handleSubmit}>
    <input className="m-4 border rounded" type="number" placeholder = "Table number" name = "tableNumber" required/>
    <input className="m-4 border rounded" type="number" placeholder = "Table size (covers)" name = "maxCovers" min="2" max="10" required />
    <button className="btn btn-info" type = "submit">Save Table</button>
    </form>
  )

}
export default TableForm;
