import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;