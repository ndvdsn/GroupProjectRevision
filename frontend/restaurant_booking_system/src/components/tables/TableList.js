import React from "react";
import Table from "./Table"

const TableList = (props) => {

  const tables = props.restTables.map((restTable) => {
    return (

      <li key = {restTable.id} className = "table-item">
      <Table restTable = {restTable}/>
      </li>
    )
  })

  return(
    <ul>
    {tables}
    </ul>
  )



}
export default TableList;
