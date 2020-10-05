import React from 'react';
import './Header.css'
import {
  NavLink
} from "react-router-dom";
import ROUTES from '../constants/routes';



function Header() {
  return (
    <div className="header">
      <div>
        <div className="jumbotron_container">
          <div className="profile_pic" />
          <div className="jumbotron">
            <h1 className="jumbotron_header"> JANA</h1>
          </div>
        </div>

      </div>
      {/* <hr className="hr1" />
      <nav className="navbar">
        <ul className="navbar_items">
          {
            ROUTES.map((value, _) => (
              <NavLink to={value.path} key={_} exact={_ === 0} activeClassName="is-active">
                <li className="navbar_items_item">
                  {value.name}
                </li>
              </NavLink>
            )
            )
          }
        </ul>
      </nav> */}
    </div>
    
  );
}

export default Header;