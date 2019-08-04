import React, { Component } from 'react';

import {HeaderAdmin} from "./HeaderAdmin";
import {HeaderUser} from "./HeaderUser";

export class Root extends Component {
    render() {
        return(
            <div className="">
                {
                    this.props.location.pathname!=='/viewuser' ? (this.props.location.pathname!=='/blog' ? (this.props.location.pathname!=='/profile' ? (this.props.location.pathname!=='/login' ? <HeaderAdmin />:''):<HeaderUser />):<HeaderUser />):<HeaderUser />
                }                               
                {this.props.children}                            
            </div>
        );
    }
}