import React from "react";
import TableList from "../../components/tables/TableList"
import Request from "../../helpers/request";
import { Link } from "react-router-dom"

class TableContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      restTables:[]
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('api/restTables').then(data => {
      this.setState({restTables:data._embedded.restTables})
    })
  }

  render(){
    return (
      <>
      <h1> Tables </h1>
      <div className = "restTable-container">
      <TableList className="table-tables"restTables = {this.state.restTables}/>

      <Link to={"/restTables/new"} className="new-table"><button className="btn btn-info">Create Table</button></Link>

      </div>
      </>
    )
  }
}
export default TableContainer;


// <Link to={'/bookings/update/' +id}
// className="single-booking-update"><button>Update</button>
// </Link>
