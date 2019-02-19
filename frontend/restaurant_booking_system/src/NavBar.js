import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
    {/* <img src="/images/pirtate-flag.jpg" alt="Logo"/> */}
    <ul className="navbar-Sections">

    <li className="navLink">
    <Link to="/bookings">Bookings</Link>
    </li>
    <li className="navLink">
    <Link to="/bookings/new">Create Booking</Link>
    </li>
    <li className="navLink">
    <Link to="/customers">Customers</Link>
    </li>
    <li className="navLink">
    <Link to="/customers/new">Create new customer</Link>
    </li>
    <li className="navLink">
    <Link to="/restTables">Tables</Link>
    </li>
    <li className="navLink">
    <Link to="/today" >Today</Link>
    </li>
    
    </ul>
    </header>
  )
}

export default NavBar;
