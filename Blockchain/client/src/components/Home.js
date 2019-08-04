import React, { Component } from 'react';

import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";

import Background from "../back.jpg";

export class Home extends Component {
      state = {buffer: null, web3: null, accounts: null, contract: null,
        prod_id: '',
        prod_status: '',
        authority: '',
        timestamp: ''}; 
      constructor(props)
      {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
    componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();           
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();      

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(deployedNetwork);    
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


      onSubmit(event) {
        const { accounts, contract } = this.state;
        event.preventDefault()

        contract.methods.addReport(this.state.prod_id, this.state.prod_status, this.state.authority, this.state.timestamp).send({from: accounts[0]});
       
      }
                
    render(){
        return (
            <div>
           
            <div className="page-wrapper page-sidebar" style={{marginTop: "50px"}}>
                <div className="container">
                    <div className="row">

                        <main itemProp="mainContentOfPage" itemscope itemtype="http://schema.org/WebPageElement" className="content">

                            <article className="fly-article-details" itemscope itemtype="http://schema.org/DonateAction" itemref="projectTitle1">                    


                            <form onSubmit={this.onSubmit} id="donateForm" className="donate-form">
                                <h4 className="title-styled">Add status update</h4>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group required">
                                            <label for="report_type">ENTER PRODUCT ID</label>
                                            <input className="form-control" type="text" id="prod_id" name="prod_id" placeholder="Enter product id" onChange={(evt) => { this.state.prod_id =  evt.target.value; }} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label for="company">CURRENT STATUS OF PRODUCT</label>
                                            <input className="form-control" type="text" id="prod_status" name="prod_status" placeholder="Enter status of product" onChange={(evt) => { this.state.prod_status =  evt.target.value; }} required />
                                        </div>
                                    </div>                    
                                </div>

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group required">
                                            <label for="par_rem">SIGNING AUTHORITY</label>
                                            <input className="form-control" type="text" id="authority" name="authority" placeholder="Signing Authority" onChange={(evt) => { this.state.authority =  evt.target.value; }} required />                                    
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group required">
                                            <label for="fee">TIMESTAMP</label>
                                            <input className="form-control" type="text" id="timestamp" name="timestamp" onChange={(evt) => { this.state.timestamp =  evt.target.value; }} placeholder="2019-08-03 20:45" required />
                                        </div>
                                    </div>                                                           
                                    <div className="form-submit">
                                        <button type="submit" className="dropbtn1" style={{marginTop:"10px"}}>Upload to Blockchain</button>  
                                    </div>   
                                </div>                                                                                   
                            </form>                            
                        </article>
                        </main>
                    </div>
                </div>
            </div>   
            </div>
            
        );
    }    
}