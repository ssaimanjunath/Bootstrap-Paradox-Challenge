import React, { Component } from 'react';
import { Link } from "react-router";

import logo from '../blocks.svg';
import imgUrl from '../login_background.jpg';

import { withRouter,Redirect } from 'react-router-dom';
import {browserHistory} from 'react-router';


export class Login extends Component {  
    componentDidMount(){
        document.title = "Login"
    };
    state = {
        username:'',
        password:'' 
    };
    validate = (state) =>{
        var uname = this.state.username;
        var pass =  this.state.password;
        if(uname==null || uname == '' || pass==null || pass=='')
            {
                alert("Username / Password Missing!!!");
            }
        else
            {
                if( (uname=="manager@milkbasket.com") && (pass=="1234") )
                    {
                        browserHistory.push('/viewuser');
                    }        
            }
    };
    render(){
        return (            
            <div className="main-wrapper account-wrapper" style={{ marginTop: "100px"}}>                
                <div className="account-page">
                    <div className="account-center">
                        <div className="account-box">
                                <div className="account-logo">
                                    <Link to={"/login"} activeStyle={{color: "Red"}}><img src={logo} alt=""></img></Link>
                                </div>
                                <div className="form-group">
                                    <label>Username or Email</label>
                                    <input type="text" autofocus="" className="form-control" onChange={(evt) => { this.state.username =  evt.target.value; }}></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={(evt) => { this.state.password =  evt.target.value; }} ></input>
                                </div>     
                                <div class="dropdown">
                                    <button class="dropbtn">Select Role</button>
                                    <div class="dropdown-content">
                                        <a href = "">Product Moderator</a>
                                        <a href="">Product Distributor</a>
                                        <a href="" onClick={this.validate} >Warehouse Manager</a>
                                    </div>
                                </div>              
                                <br></br><br></br>                         
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Login)