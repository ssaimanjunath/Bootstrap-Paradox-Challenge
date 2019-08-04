import React, { Component } from "react";
import { Link } from "react-router";

import logo from '../blocks.svg';

export const HeaderUser = (props) => {
  return (
     <div className="header">
                <div className="header-left">
                    <a href="/viewuser" className="logo">
                        <img src={logo} width="35" height="35" alt=""></img> <span>Milk Basket</span>
                    </a>
                </div>
                <a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars"></i></a>
                <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fa fa-bars"></i></a>
                <ul className="nav user-menu float-right">          
                    <li className="nav-item">
                        <Link to={"/home"} className="dropdown-toggle nav-link">Add Update</Link></li>
                    <li className="nav-item"></li>          
                    <li className="nav-item">
                        <Link to={"/viewuser"} className="dropdown-toggle nav-link">View Status</Link></li>
                    <li className="nav-item">
                        <a href=" " className="dropdown-toggle nav-link user-link">
                            <span className="user-img">
                                <img className="rounded-circle" src="assets/img/user.jpg" width="24" alt="User"></img>                
                            </span>
                            <span>&nbsp; Warehouse Manager &nbsp; </span>
                        </a>
                    </li>
                </ul>
                <div className="dropdown mobile-user-menu float-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                    <div className="dropdown-menu dropdown-menu-right">                    
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
  );  
};