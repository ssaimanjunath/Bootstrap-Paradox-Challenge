import React, { Component } from "react";
import { Link } from "react-router";

import logo from '../blocks.svg';

export const Header = (props) => {
    var divStyle = {      
      marginLeft: "620px"
    };
    var loadIcon = {      
      padding:"5px"
    };
    var loadText = {
        fontSize:22,
        color: "#FFF",
        marginTop:"2px",
    };
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">            
            <div className="navbar-header">                 
                <ul className="nav navbar-nav">                                                   
                        <li><img src={logo} width="60" height="60" style={loadIcon} /> </li>
                        <li><Link style={loadText}>Report<span style={{fontWeight: 'bold'}}>Chain</span></Link></li>                
                        <li style={divStyle}><Link to={"/home"} activeStyle={{color: "#FFFFFF"}}>Add Report</Link></li>
                        <li><Link to={"/view"} activeStyle={{color: "#FFFFFF"}}>View Report</Link></li>                
                </ul>
            </div>
        </div>
    </nav>
  );  
};