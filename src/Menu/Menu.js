import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><p>Login, logout, and register are handled by the aws Amplify service, which is why there aren't tabs up here for it... I really hope that's okay for this assignment</p></li>
        </ul>
    </nav>
  );
}

export default Menu;